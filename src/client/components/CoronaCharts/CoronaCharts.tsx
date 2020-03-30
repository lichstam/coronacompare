import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import ChartWrapper from '../ChartWrapper';
import countries from './countries';
import {
  getPureData,
  stringToNumbers,
  removeZeros,
  removeDuplicates,
} from '../../utils';


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
      type: 'spline',
    },

    tooltip: {
      shared: true,
      crosshairs: true,
    },

    title: {
      text: country,
    },

    subtitle: {
      text: 'vs Italy',
    },

    xAxis: {
      title: {
        text: 'Days',
      },
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


const CoronaCharts = ({ confirmed }: { confirmed: any[] }) => {
  const findCountryData = (country: string) => confirmed
    .find((stat) => stat['Country/Region'] === country);

  const base = findCountryData('Italy');
  const pureBase = getPureData(base);

  return (
    <>
      {countries.map(({ country, offset }) => {
        const countryData = findCountryData(country);
        const pureCountry = getPureData(countryData);
        return (
          <ChartWrapper key={country}>
            <CoronaChart
              baseCountry="Italy"
              country={country}
              baseData={removeDuplicates(removeZeros(stringToNumbers(pureBase)))}
              countryData={removeDuplicates(removeZeros(stringToNumbers(pureCountry)))
                .slice(offset)}
            />
          </ChartWrapper>
        );
      })}
    </>
  );
};

export default CoronaCharts;
