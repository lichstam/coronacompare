import superagent from 'superagent';
import { sweAgeDeaths } from '../../constants';

const getSwedishDeathsByAge = async () => {
  const res = await superagent.get(sweAgeDeaths);
  return JSON.parse(res.text).features;
};

export default getSwedishDeathsByAge;
