import superagent from 'superagent';
import baseUrl from '../constants';
import getAggregated from '../utils/get-aggregated';

export const getPopulation = (setPopulation) => {
  superagent.get(`${baseUrl}/stats/population`)
    .then((res) => {
      const stats = JSON.parse(res.text);
      setPopulation(stats);
    });
};

export const getConfirmed = (setConfirmed) => {
  const getAggregatedByCountry = getAggregated('Country/Region');
  superagent.get(`${baseUrl}/stats/confirmed`)
    .then((res) => {
      const rawStats = JSON.parse(res.text);
      setConfirmed(getAggregatedByCountry(rawStats));
    });
};

