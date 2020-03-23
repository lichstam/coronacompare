import superagent from 'superagent';
import baseUrl from '../constants';
import { getAggregatedBy } from '../utils';

const getUrl = (type: string) => `${baseUrl}/stats/${type}`;

const getData = (typeOfData: string) => superagent.get(getUrl(typeOfData))
  .then((res) => JSON.parse(res.text));

const getAggregatedData = (typeOfData: string) => {
  const getAggregatedByCountry = getAggregatedBy('Country/Region');
  return superagent.get(getUrl(typeOfData))
    .then((res) => {
      const rawStats = JSON.parse(res.text);
      return getAggregatedByCountry(rawStats);
    });
};

export const getDeaths = () => getAggregatedData('deaths');
export const getConfirmed = () => getAggregatedData('confirmed');
export const getPopulation = () => getData('population');
