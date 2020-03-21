import React, { useState, useEffect } from 'react';
import superagent from 'superagent';
import { omit } from 'ramda';
import CoronaChart from './components/CoronaChart';
import baseUrl from './constants';

const getPureData = omit(['Province/State', 'Country/Region', 'Lat', 'Long']);
const stringToNumbers = (data) => Object.values(data).map(Number);
const removeZeros = (data) => data.filter(Boolean);
const removeDuplicates = (data) => data.filter((item, i) => data[i + 1] !== item);

const countries = [
  { country: 'Sweden', slice: 0 },
  { country: 'Germany', slice: 10 },
  { country: 'Spain', slice: 5 },
  { country: 'Poland', slice: 0 },
];

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    superagent.get(`${baseUrl}/stats/`)
      .then((res) => {
        setStats(JSON.parse(res.text));
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
