import web3 from './web3';
import campaign from './build/Campaign.json';

export default (address) => {
    // Handler for specific campaign contract
    return new web3.eth.Contract(
        campaign.abi,
        address
    );
};