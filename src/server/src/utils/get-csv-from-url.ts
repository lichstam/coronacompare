import csv from 'csvtojson';
import superagent from 'superagent';

const getCSVFromUrl = (url: string) => async () => {
  const res: any = superagent.get(url);
  return csv().fromStream(res);
};

export default getCSVFromUrl;
