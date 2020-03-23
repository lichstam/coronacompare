import superagent from 'superagent';
import baseUrl from '../constants';
import getAggregated from '../utils/get-aggregated';

export const getPopulation = () => superagent.get(`${baseUrl}/stats/population`)
  .then((res) => JSON.parse(res.text));

export const getAggregatedData = (typeOfData: string) => {
  const getAggregatedByCountry = getAggregated('Country/Region');
  return superagent.get(`${baseUrl}/stats/${typeOfData}`)
    .then((res) => {
      const rawStats = JSON.parse(res.text);
      return getAggregatedByCountry(rawStats);
    });
};

