import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import DeathsByAgeChart from './components/DeathsByAgeChart';
import ConfirmedVsICUTreated from './components/ConfirmedVsICUTreated';
import ICUByGender from './components/ICUByGender';
import {
  getSweConfirmed,
  getSweDeaths,
  getSweDeathsByAge,
  getSweICUByGender,
} from '../../api';

const Country = ({ match }) => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [deathsByAge, setDeathsByAge] = useState([]);
  const [ICUGender, setICUByGender] = useState([]);

  useEffect(() => {
    getSweDeaths().then(setDeaths);
    getSweConfirmed().then(setConfirmed);
    getSweDeathsByAge().then(setDeathsByAge);
    getSweICUByGender().then(setICUByGender);
  }, []);

  return (
    <div className="country">
      <Scores confirmed={confirmed} deaths={deaths} />
      <ConfirmedVsICUTreated confirmed={confirmed} />
      <ICUByGender ICUGender={ICUGender} />
      <DeathsByAgeChart deathsByAge={deathsByAge} />
    </div>
  );
};

export default Country;
