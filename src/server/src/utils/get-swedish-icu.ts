import superagent from 'superagent';
import { sweICU } from '../../constants';

const payload = 'highChartUrl=/api/reports/GenerateHighChart&tableUrl=/api/reports/GenerateExcel&chartWidth=900&reportName=alderkon-corona&startdat=2020-01-01&stopdat=2020-03-29&sasong%5B0%5D=2019';

const getSweICU = async () => {
  const res = await superagent.post(sweICU).send(payload);
  return JSON.parse(res.text).ChartSeries;
};

export default getSweICU;
