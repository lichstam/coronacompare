import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import CoronaCharts from './components/CoronaCharts';
import DeathCharts from './components/DeathCharts';
import HerdImmunityChart from './components/HerdImmunityChart';
import { getDeaths, getConfirmed, getPopulation } from './api';
import countries from './countries';

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
    <div className="container">
      <div className="app__menu">
        <Menu pageWrapId="page-wrap" outerContainerId="container" isOpen={false}>
          {countries.map((country) => (
            <a key="country" id="home" className="menu-item" href="/">{country}</a>
          ))}
        </Menu>
      </div>
      <div className="app" id="page-wrap">
        <h1>Coronavirus Development in Various Countries</h1>
        <div className="app__wrapper">
          <CoronaCharts confirmed={confirmed} />
        </div>
        <h1>Coronavirus Confirmed and Deaths</h1>
        <div className="app__wrapper" id="confirmed-deaths">
          <DeathCharts confirmed={confirmed} deaths={deaths} population={population} />
        </div>
        <div className="app__wrapper" id="herd-immunity">
          <HerdImmunityChart population={population} />
        </div>
        <p>Source: Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</p>
      </div>
    </div>
  );
};

export default App;
