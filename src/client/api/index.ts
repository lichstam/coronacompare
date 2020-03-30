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
export const getSweConfirmed = () => getData('swedish-confirmed');
export const getSweDeaths = () => getData('swedish-deaths');
export const getSweDeathsByAge = () => getData('swedish-deaths-by-age');
export const getSweICU = () => getData('swedish-icu-by-gender');
export const getSweICUTimeseries = () => getData('swedish-icu-time-series');
export const getSweICUByGender = () => getData('swedish-icu-by-gender');
