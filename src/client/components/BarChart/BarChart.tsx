// @ts-nocheck
// disabling ts-check due to Highcharts
//
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface BarChartProps {
  yValues: number[]
  xValues: string[]
  title: string
}

const BarChart = ({
  yValues,
  xValues,
  title,
}: BarChartProps) => {
  const options: Highcharts.Options = {
    credits: { enabled: false },
    legend: { enabled: false },
    title: { text: title },
    chart: {
      backgroundColor: 'transparent',
      type: 'column',
    },
    series: [{
      data: yValues,
      dataLabels: {
        crop: false,
        enabled: true,
      },
    }],
    yAxis: {
      labels: { enabled: false },
      gridLineWidth: 0,
      title: {
        text: 'Deaths',
      },
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

export default BarChart;
