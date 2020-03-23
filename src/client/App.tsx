import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { omit } from 'ramda';
import CoronaChart from './components/CoronaChart';
import baseUrl from './constants';
import getAggregated from './utils/get-aggregated';
import countries from './countries';

const getPureData = omit(['Province/State', 'Country/Region', 'Lat', 'Long']);
const stringToNumbers = (data: []) => Object.values(data).map(Number);
const removeZeros = (data: number[]) => data.filter(Boolean);
const removeDuplicates = (data: number[]) => data.filter((item, i) => data[i + 1] !== item);
const getAggregatedByCountry = getAggregated('Country/Region');

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    superagent.get(`${baseUrl}/stats/`)
      .then((res) => {
        const rawStats = JSON.parse(res.text);
        setStats(getAggregatedByCountry(rawStats));
      });
  }, []);

  const findCountryData = (country: string) => stats.find((stat) => stat['Country/Region'] === country);

  const base = findCountryData('Italy');
  const pureBase = getPureData(base);

  return (
    <div className="app">
      <h1>Coronavirus development in various countries</h1>
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
