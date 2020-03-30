import React, { useState } from 'react';
import BarChart from '../../../BarChart';

interface ICUByGenderProps {
  ICUGender: Record<string, any>
}

const ConfirmedVsICUTreated = ({ ICUGender }: ICUByGenderProps) => {
  const men = [];
  const women = [];
  const ages = [];
  const rows = ICUGender?.Rows || [];
  rows.forEach((item) => {
    const [ageGroup] = item;
    const [currMen, currWomen] = item.slice(-2);
    men.push(+currMen);
    women.push(+currWomen);
    ages.push(ageGroup);
  });

  const series = [{
    name: 'Men',
    data: men,
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }, {
    name: 'Women',
    data: women,
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }];

  const options = {
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    colors: ['#7CB5EC', '#EE5764'],
  };

  return (
    <BarChart opts={options} xValues={ages} series={series} title="ICU Patients, women and men (Swedish Labels)" />
  );
};

export default ConfirmedVsICUTreated;
