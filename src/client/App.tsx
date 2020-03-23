import React, { useState, useEffect } from 'react';
import { omit } from 'ramda';
import CoronaChart from './components/CoronaChart';
import countries from './countries';
import { getAggregatedData, getPopulation } from './api';

const getPureData = omit(['Province/State', 'Country/Region', 'Lat', 'Long']);
const stringToNumbers = (data: []) => Object.values(data).map(Number);
const removeZeros = (data: number[]) => data.filter(Boolean);
const removeDuplicates = (data: number[]) => data.filter((item, i) => data[i + 1] !== item);

const App = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [population, setPopulation] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getAggregatedData('confirmed').then(setConfirmed);
    getAggregatedData('deaths').then(setDeaths);
    getPopulation().then(setPopulation);
  }, []);

  const findCountryData = (country: string) => confirmed.find((stat) => stat['Country/Region'] === country);

  const base = findCountryData('Italy');
  const pureBase = getPureData(base);

  return (
    <div className="app">
      <h1>Coronavirus development in various countries</h1>
      <h5>Source: Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</h5>
      <div className="app__wrapper">
        {countries.map(({ country, offset }) => {
          const countryData = findCountryData(country);
          const pureCountry = getPureData(countryData);
          return (
            <div key={country} className="app__chart-wrapper">
              <CoronaChart
                baseCountry="Italy"
                country={country}
                baseData={removeDuplicates(removeZeros(stringToNumbers(pureBase)))}
                countryData={removeDuplicates(removeZeros(stringToNumbers(pureCountry)))
                  .slice(offset)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
