import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import DeathsByAgeChart from './components/DeathsByAgeChart';
import ConfirmedVsICUTreated from './components/ConfirmedVsICUTreated';
import { getSweConfirmed, getSweDeaths, getSweDeathsByAge } from '../../api';

const Country = ({ match }) => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [deathsByAge, setDeathsByAge] = useState([]);

  useEffect(() => {
    getSweDeaths().then(setDeaths);
    getSweConfirmed().then(setConfirmed);
    getSweDeathsByAge().then(setDeathsByAge);
  }, []);

  return (
    <div className="country">
      <Scores confirmed={confirmed} deaths={deaths} />
      <ConfirmedVsICUTreated confirmed={confirmed} />
      <DeathsByAgeChart deathsByAge={deathsByAge} />
    </div>
  );
};

export default Country;
