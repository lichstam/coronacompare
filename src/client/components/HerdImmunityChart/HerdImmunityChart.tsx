import React from 'react';

import Highcharts from 'highcharts';
import BarChart from '../BarChart';
import countries from '../../countries';

interface DeathChartProps {
  population: any[]
}

const DeathCharts = ({ population }: DeathChartProps) => {
  const getCountryPopulation = (countryToGet: string) => population
    .find(({ country }) => country === countryToGet) || [];

  const mappedPopulations = countries.map((country) => getCountryPopulation(country).population);
  const herdImmunityInfections = mappedPopulations.map((population) => Math.log10(population * 0.6));
  const herdImmunityDeaths = herdImmunityInfections.map((population) => population * 0.1);

  const series = (name: string, infections: number[], deaths: number[]) => ([{
    name,
    data: infections,
    dataLabels: {
      crop: false,
      enabled: true,
      formatter() { return Highcharts.numberFormat(10 ** this.y, 0, ',', ' '); },
    },
  }, {
    name,
    data: deaths,
    dataLabels: {
      crop: false,
      enabled: true,
      formatter() { return Highcharts.numberFormat(0.01 * (10 ** (this.y * 10)), 0, ',', ' '); },
    },
  }]);

  return (
    <>
      <div className="app__chart-wrapper">
        <h1>Herd Immunity</h1>
        <h5>
          Infections and deaths without vaccine in order to obtain herd immunity.
          Based on the leading experts&apos; claim that 60% of a population needs to be immune and a fatality rate of approx 1%
        </h5>
        <BarChart
          xValues={countries}
          series={series('herd', herdImmunityInfections, herdImmunityDeaths)}
          title="How many people have to become infected/die without vaccine (log scale)"
        />
      </div>
    </>
  );
};

export default DeathCharts;
