import { getDeaths, getConfirmed, getPopulation } from '../utils';

export default [
  { fn: getPopulation, endpoint: '/population' },
  { fn: getConfirmed, endpoint: '/confirmed' },
  { fn: getDeaths, endpoint: '/deaths' },
];
