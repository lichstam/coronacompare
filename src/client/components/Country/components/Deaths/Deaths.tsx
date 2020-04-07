import React from 'react';
import BarChart from '../../../BarChart';

type DeathsProps = { deaths: any[] }

const Deaths = ({ deaths }: DeathsProps) => {
  const totalsDailyDeaths = deaths[deaths.length - 2] || [];
  const dateKeys = Object.keys(totalsDailyDeaths).filter((key) => key.includes('2020'));
  const lastTwentyDays = dateKeys.slice(-20).reverse();
  const numbersOfDeaths = lastTwentyDays.map((day) => +totalsDailyDeaths[day]);

  const series = [{
    name: 'Deaths',
    data: numbersOfDeaths,
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }];

  return (
    <BarChart xValues={lastTwentyDays} title="New Death Cases Per Day" series={series} />
  );
};

export default Deaths;
