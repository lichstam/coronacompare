import React, { useEffect, useState } from 'react';
import { getSweDeathsByAge, getSweICU } from '../../../../api';

const DeathsByAgeChart = () => {
  const [ICU, setICU] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getSweICU().then(setICU);
    getSweDeathsByAge().then(setDeaths);
  }, []);

  return (
    <div className="" />
  );
};

export default DeathsByAgeChart;
