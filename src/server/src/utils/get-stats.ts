import csv from 'csvtojson';
import superagent from 'superagent';
import { confirmedCasesUrl } from '../../constants';

const getStats = async () => {
  const res: any = superagent.get(confirmedCasesUrl);
  return csv().fromStream(res);
};

export default getStats;
