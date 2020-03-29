import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import CoronaCharts from './components/CoronaCharts';
import DeathCharts from './components/DeathCharts';
import HerdImmunityChart from './components/HerdImmunityChart';
import { getDeaths, getConfirmed, getPopulation } from './api';

const App = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [population, setPopulation] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getConfirmed().then(setConfirmed);
    getDeaths().then(setDeaths);
    getPopulation().then(setPopulation);
  }, []);

  const history = useHistory();

  const handleClick = () => {
    history.push('/sweden');
  };

  return (
    <div className="container">
      <div className="app__menu">
        <Menu pageWrapId="page-wrap" outerContainerId="container" isOpen={false}>
          <p className="menu-item" onClick={handleClick}>Sweden</p>
        </Menu>
      </div>
      <div className="app" id="page-wrap">
        <h1>Coronavirus Confirmed and Deaths</h1>
        <div className="app__wrapper" id="confirmed-deaths">
          <DeathCharts confirmed={confirmed} deaths={deaths} population={population} />
        </div>
        <div className="app__wrapper" id="herd-immunity">
          <HerdImmunityChart population={population} />
        </div>
        <h1>Coronavirus Development in Various Countries</h1>
        <div className="app__wrapper">
          <CoronaCharts confirmed={confirmed} />
        </div>
        <p>Source: Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</p>
      </div>
    </div>
  );
};

export default App;
