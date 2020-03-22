import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

interface CoronaChartProps {
  country: string
  baseCountry: string
  baseData: number[]
  countryData: number[]
}

const CoronaChart = ({
  country,
  baseCountry,
  baseData,
  countryData,
}: CoronaChartProps) => {
  const options = {
    credits: { enabled: false },
    chart: {
      backgroundColor: 'transparent',
      type: 'line',
    },

    title: {
      text: country,
    },

    subtitle: {
      text: 'vs Italy',
    },

    yAxis: {
      title: {
        text: 'Registered cases',
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 1,
      },
    },

    series: [{
      name: baseCountry,
      data: baseData,
      color: '#dddddd',
      marker: {
        enabled: true,
        radius: 1,
      },
    }, {
      name: country,
      data: countryData,
      lineWidth: 0,
      marker: {
        enabled: true,
        radius: 5,
      },
    }],

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
          },
        },
      }],
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
