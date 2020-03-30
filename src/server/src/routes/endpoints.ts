import {
  getDeaths,
  getConfirmed,
  getPopulation,
  getSwedishDeaths,
  getSwedishConfirmed,
  getSwedishDeathsByAge,
  getSwedishICUByGender,
  getSwedishICUTimeseries,
} from '../utils';

export default [
  { fn: getPopulation, endpoint: '/population' },
  { fn: getConfirmed, endpoint: '/confirmed' },
  { fn: getDeaths, endpoint: '/deaths' },
  { fn: getSwedishDeaths, endpoint: '/swedish-deaths' },
  { fn: getSwedishConfirmed, endpoint: '/swedish-confirmed' },
  { fn: getSwedishDeathsByAge, endpoint: '/swedish-deaths-by-age' },
  { fn: getSwedishICUByGender, endpoint: '/swedish-icu-by-gender' },
  { fn: getSwedishICUTimeseries, endpoint: '/swedish-icu-time-series' },
];
