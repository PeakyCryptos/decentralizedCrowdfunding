import web3 from './web3';
import campaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    campaignFactory.abi,
    '0x0432C0f77a8364b79426535ee039423Ec676C660'
    );

export default instance;