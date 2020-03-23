import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface CoronaChartProps {
  deaths: any[]
  population: any[]
}

const CoronaChart = ({
  deaths,
  population,
}: CoronaChartProps) => {
  const options: Highcharts.Options = {
    credits: { enabled: false },
    legend: { enabled: false },
    title: undefined,
    chart: {
      backgroundColor: 'transparent',
      type: 'column',
      height: 115,
      marginTop: 30,
      width: 300,
    },
    series: [{
      data: yValues,
      dataLabels: {
        crop: false, overflow: 'none', enabled: true,
      },
    }],
    yAxis: {
      title: { enabled: false },
      labels: { enabled: false },
      gridLineWidth: 0,
    },
    xAxis: {
      categories: xValues,
      gridLineWidth: 0,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default CoronaChart;
