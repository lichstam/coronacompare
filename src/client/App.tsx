import React, { useState, useEffect } from 'react';
import CoronaCharts from './components/CoronaCharts';
import { getDeaths, getConfirmed, getPopulation } from './api';

{ /* import DeathChart from './components/DeathChart'; */ }

const App = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [population, setPopulation] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getConfirmed().then(setConfirmed);
    getDeaths().then(setDeaths);
    getPopulation().then(setPopulation);
  }, []);

  return (
    <div className="app">
      <h1>Coronavirus development in various countries</h1>
      <h5>Source: Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</h5>
      <div className="app__wrapper">
        <CoronaCharts confirmed={confirmed} />
      </div>
    </div>
  );
};

export default App;
