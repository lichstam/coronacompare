import React from 'react';
import { values as RValues } from 'ramda';
import BarChart from '../../../BarChart';

const DeathsByAgeChart = ({ deathsByAge }) => {
  const values = [];
  const ages = [];

  deathsByAge.forEach(({ attributes }) => {
    const [value, ageGroup] = RValues(attributes);
    values.push(value);
    ages.push(ageGroup);
  });

  const series = [{
    name: 'Deaths',
    data: values,
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }];

  return (
    <div>
      <BarChart xValues={ages} title="Deaths by age group (Swedish labels)" series={series} />
    </div>
  );
};

export default DeathsByAgeChart;
