const dotenv = require("dotenv");
const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const { abi, evm } = require("./build/CampaignFactory.json");

dotenv.config({ path: path.resolve(__dirname, "../", ".env") });

//const INITIAL_VALUE = '100';

const provider = new HDWalletProvider(
    process.env.MEMONIC,
    process.env.PROVIDER_URL
);
const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    
    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object })
        .send({ from: accounts[0] });
    
    //console.log(JSON.stringify(abi, null, 4));
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop() ;
};

deploy();