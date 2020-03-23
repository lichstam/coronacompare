import React from 'react';
import {
  values,
  compose,
  max,
  map,
  reduce,
  zipObj,
  keys,
} from 'ramda';
import BarChart from '../BarChart';
import countries from './countries';

import {
  getPureData,
} from '../../utils';

interface DeathChartProps {
  deaths: any[]
  population: any[]
}

const sortedKeys = (zipped: Record<string, number>) => keys(zipped)
  .sort((a: string, b: string) => zipped[b] - zipped[a]);
const sortedNumbers = (numbers: number[]) => numbers.sort((a, b) => b - a);

const DeathCharts = ({ deaths, population }: DeathChartProps) => {
  const mappedCountries = countries.map((country) => deaths.find((item) => item['Country/Region'] === country));
  const pureMappedCountries = mappedCountries.map(getPureData);
  const recentDeaths = pureMappedCountries.map<number>(
    compose(reduce(max, 0), map(Number), values),
  );

  const getCountryPopulation = (i: number) => population
    .find(({ country }) => country === countries[i]) || [];

  const recentDeathsPerCapita = recentDeaths
    .map((deathsInCountry: number, i) => +(
      (100000 / getCountryPopulation(i).population) * deathsInCountry
    ).toPrecision(2));

  const zipped = zipObj(countries);

  return (
    <>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentDeaths))}
          yValues={sortedNumbers(recentDeaths)}
          title="Number of deaths, absolute numbers"
        />
      </div>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentDeathsPerCapita))}
          yValues={sortedNumbers(recentDeathsPerCapita)}
          title="Number of deaths per 100.000"
        />
      </div>
    </>
  );
};

export default DeathCharts;
