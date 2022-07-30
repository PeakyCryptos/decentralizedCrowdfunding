const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () =>  {
    accounts = await web3.eth.getAccounts();

    const contract = await new web3.eth.Contract(compiledFactory.abi);
    const deploy = await contract.deploy({
        data: '0x' + compiledFactory.evm.bytecode.object
    });

    factory = await deploy.send({
        from: accounts[0],
        gas: '1500000' 
    });

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1500000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

async function getBalance(accIndex) {
    let balance = await web3.eth.getBalance(accounts[accIndex]);
    balance = web3.utils.fromWei(balance, 'ether');
    return parseFloat(balance);
} 

describe('campaign', () => {

    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });
    
    it('caller is campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager)    
    });

    it('verify minContribution initalizes correct val', async () => {
        const minContribution = await campaign.methods.minContribution().call()
        assert.equal('100', minContribution)
     });

     it('verify can contribute, and marked as approver', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '101' 
        });

        const approver = await campaign.methods.approvers(accounts[1]).call();
        assert(approver)
     });

     it('verify can only contribute over mincontribution', async () => {
        try {
            await campaign.methods.contribute().send({
                from: accounts[1],
                value: '99' 
            });
        } catch(err) {
            assert(err)
            return
        }

        assert(false)
     });

     it('allows manager to make a payment request', async () => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '1000' 
        });

        await campaign.methods.createRequests('Buy Batteries', '100', accounts[1])
        .send({
            from: accounts[0],
            gas: '1500000'
        });
        
        const request = await campaign.methods.requests(0).call()

        assert.equal('Buy Batteries', request.description)
     });

     it('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether') 
        });
        
        await campaign.methods
        .createRequests('A', web3.utils.toWei('5', 'ether'), accounts[1])
        .send({ from: accounts[0], gas: '1000000' });
        
        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        })

        balanceBefore = await getBalance(1);
        console.log(balanceBefore)

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'    
        })

        balanceAfter = await getBalance(1);
        console.log(balanceAfter)
        assert(balanceAfter > balanceBefore)
     });

});
