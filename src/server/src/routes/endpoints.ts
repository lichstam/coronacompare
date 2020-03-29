import {
  getDeaths,
  getConfirmed,
  getPopulation,
  getSwedishDeaths,
  getSwedishConfirmed,
  getSwedishICU,
  getSwedishDeathsByAge,
} from '../utils';

export default [
  { fn: getPopulation, endpoint: '/population' },
  { fn: getConfirmed, endpoint: '/confirmed' },
  { fn: getDeaths, endpoint: '/deaths' },
  { fn: getSwedishDeaths, endpoint: '/swedish-deaths' },
  { fn: getSwedishConfirmed, endpoint: '/swedish-confirmed' },
  { fn: getSwedishICU, endpoint: '/swedish-icu' },
  { fn: getSwedishDeathsByAge, endpoint: '/swedish-deaths-by-age' },
];
