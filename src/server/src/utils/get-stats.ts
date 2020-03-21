import csv from 'csvtojson';
import superagent from 'superagent';

const url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv';

const getStats = async () => {
  const res = superagent.get(url);
  return csv().fromStream(res);
};

export default getStats;
