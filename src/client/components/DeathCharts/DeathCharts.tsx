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
import countries from '../../countries';

import {
  getPureData,
} from '../../utils';

interface DeathChartProps {
  deaths: any[]
  population: any[]
  confirmed: any[]
}

const sortedKeys = (zipped: Record<string, number>) => keys(zipped)
  .sort((a: string, b: string) => zipped[b] - zipped[a]);
const sortedNumbers = (numbers: number[]) => numbers.sort((a, b) => b - a);

const getMappedCountries = (data) => countries.map((country) => data.find((item) => item['Country/Region'] === country));
const getPure = (data) => data.map(getPureData);
const getSumData = (data: []) => data.map<number>(
  compose(reduce(max, 0), map(Number), values),
);


const DeathCharts = ({ confirmed, deaths, population }: DeathChartProps) => {
  const mappedDeathCountries = getMappedCountries(deaths);
  const pureDeathData = getPure(mappedDeathCountries);
  const recentDeaths = getSumData(pureDeathData);

  const mappedConfirmedCountries = getMappedCountries(confirmed);
  const pureConfirmedData = getPure(mappedConfirmedCountries);
  const recentConfirmed = getSumData(pureConfirmedData);


  const getCountryPopulation = (i: number) => population
    .find(({ country }) => country === countries[i]) || [];

  const getPerHunderedkCapita = (data) => data
    .map((deathsInCountry: number, i) => +(
      (100000 / getCountryPopulation(i).population) * deathsInCountry
    ).toPrecision(2));

  const zipped = zipObj(countries);

  const infectedEstimation = recentDeaths
    .map((deathsInCountry: number) => deathsInCountry / 0.01);

  const series = (name: string, data: number[]) => ([{
    name,
    data,
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }]);

  const recentDeathsPerCapita = getPerHunderedkCapita(recentDeaths);
  const recentConfirmedPerCapita = getPerHunderedkCapita(recentConfirmed);

  return (
    <>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentConfirmed))}
          series={series('Deaths', sortedNumbers(recentConfirmed))}
          title="Number confirmed, absolute numbers"
        />
      </div>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentConfirmedPerCapita))}
          series={series('Deaths', sortedNumbers(recentConfirmedPerCapita))}
          title="Number confirmed per 100.000"
        />
      </div>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentDeaths))}
          series={series('Deaths', sortedNumbers(recentDeaths))}
          title="Number of deaths, absolute numbers"
        />
      </div>
      <div className="app__chart-wrapper">
        <BarChart
          xValues={sortedKeys(zipped(recentDeathsPerCapita))}
          series={series('Deaths per 100k', sortedNumbers(recentDeathsPerCapita))}
          title="Number of deaths per 100.000"
        />
      </div>
      <div className="app__chart-wrapper">
        <h1>Coronavirus Estimations</h1>
        <h5>
          An estimation based on a 1% fatality rate and the current death numbers in various countries.
        </h5>
        <p>
          It is important to bear in mind that
          there is a time lag from the moment someone becomes infected to the day they pass away of up to four weeks.
          This means that the number of infections are probably much higher. See these numbers as
          {' '}
          <strong>minimum</strong>
          {' '}
          amount of infected.
        </p>
        <BarChart
          xValues={sortedKeys(zipped(infectedEstimation))}
          series={series('Estimated real infections', sortedNumbers(infectedEstimation))}
          title="Estimated real cases infected"
        />
      </div>
    </>
  );
};

export default DeathCharts;
