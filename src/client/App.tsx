import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { omit } from 'ramda';
import CoronaChart from './components/CoronaChart';
import baseUrl from './constants';
import getAggregated from './utils/get-aggregated';

const getPureData = omit(['Province/State', 'Country/Region', 'Lat', 'Long']);
const stringToNumbers = (data) => Object.values(data).map(Number);
const removeZeros = (data) => data.filter(Boolean);
const removeDuplicates = (data) => data.filter((item, i) => data[i + 1] !== item);

const countries = [
  { country: 'Germany', slice: 10 },
  { country: 'Austria', slice: 8 },
  { country: 'Spain', slice: 5 },
  { country: 'Sweden', slice: 7 },
  { country: 'United Kingdom', slice: 10 },
  { country: 'France', slice: 10 },
  { country: 'Poland', slice: 0 },
  { country: 'Switzerland', slice: 2 },
  { country: 'Iceland', slice: 6 },
  { country: 'US', slice: 13 },
  { country: 'Canada', slice: 22 },
];

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    superagent.get(`${baseUrl}/stats/`)
      .then((res) => {
        const rawStats = JSON.parse(res.text);
        setStats(getAggregated(rawStats));
      });
  }, []);

  const findCountryData = (country) => stats.find((stat) => stat['Country/Region'] === country) || [];

  const base = findCountryData('Italy');
  const pureBase = getPureData(base);

  return (
    <div className="app">
      <h1>Coronavirus development in various countries</h1>
      <div className="app__wrapper">
        {countries.map(({ country, slice }) => {
          const countryData = findCountryData(country);
          const pureCountry = getPureData(countryData);
          return (
            <div key={country} className="app__chart-wrapper">
              <CoronaChart
                baseCountry="Italy"
                country={country}
                baseData={removeDuplicates(removeZeros(stringToNumbers(pureBase)))}
                countryData={removeDuplicates(removeZeros(stringToNumbers(pureCountry))).slice(slice)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
