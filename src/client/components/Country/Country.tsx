import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import DeathsByAgeChart from './components/DeathsByAgeChart';
import ConfirmedVsICUTreated from './components/ConfirmedVsICUTreated';
import { getSweConfirmed, getSweDeaths } from '../../api';

const Country = ({ match }) => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getSweDeaths().then(setDeaths);
    getSweConfirmed().then(setConfirmed);
  }, []);

  const { id } = match.params;

  return (
    <div className="country">
      <Scores confirmed={confirmed} deaths={deaths} />
      <ConfirmedVsICUTreated confirmed={confirmed} />
      <DeathsByAgeChart />
    </div>
  );
};

export default Country;
