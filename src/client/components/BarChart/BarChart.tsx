// @ts-nocheck
// disabling ts-check due to Highcharts

import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface BarChartProps {
  xValues: string[]
  title: string
  series: {}
  opts: {}
}

const BarChart = ({
  opts = {},
  xValues,
  title,
  series,
}: BarChartProps) => {
  const options: Highcharts.Options = {
    credits: { enabled: false },
    legend: { enabled: false },
    title: { text: title },
    chart: {
      backgroundColor: 'transparent',
      type: 'bar',
      width: 450,
    },
    series,
    yAxis: {
      labels: { enabled: false },
      gridLineWidth: 0,
      title: {
        enabled: false,
      },
    },
    xAxis: {
      categories: xValues,
      gridLineWidth: 0,
    },
    ...opts,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default BarChart;
