import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xe71daF826142cAea46f0C217C00b3C0253D7F615'
);

export default instance;
