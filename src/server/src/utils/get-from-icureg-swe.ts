import superagent from 'superagent';
import { sweICU } from '../../constants';

const getFromICUregSwe = (payload: string) => async () => {
  const res = await superagent.post(sweICU).send(payload).retry(5);
  return JSON.parse(res.text).DetailedTable;
};

export default getFromICUregSwe;
