import React from 'react';
import BarChart from '../../../BarChart';

interface ICUCurrentCasesPerDayProps {
  ICUCurrentCasesPerDay: Record<string, any>
}

const ICUCurrentCasesPerDay = ({ ICUCurrentCasesPerDay: ICUData }: ICUCurrentCasesPerDayProps) => {
  const cases = [];
  const dates = [];
  const rows = ICUData?.Rows || [];

  rows.slice(-30).forEach((item) => {
    const [date, dailyCase] = item;
    dates.unshift(date);
    cases.unshift(+dailyCase);
  });

  const series = [{
    name: 'Total Cases Each Day',
    data: cases,
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
    <BarChart opts={options} xValues={dates} series={series} title="Daily ICU Total Cases" />
  );
};

export default ICUCurrentCasesPerDay;
