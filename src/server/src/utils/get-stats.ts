import csv from 'csvtojson';
import superagent from 'superagent';

const url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

const getStats = async () => {
  const res: any = superagent.get(url);
  return csv().fromStream(res);
};

export default getStats;
