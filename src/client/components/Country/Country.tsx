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
      <ul className="country__sources">
        <h5>Sources:</h5>
        <li className="country__source">https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/aktuellt-epidemiologiskt-lage/</li>
        <li className="country__source">https://www.icuregswe.org/data--resultat/covid-19-i-svensk-intensivvard/</li>
        <li className="country__source">Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</li>
        <li className="country__source">https://github.com/elinlutz/gatsby-map</li>
      </ul>
    </div>
  );
};

export default Country;
