import React, { useEffect, useState } from 'react';
import Scores from './components/Scores';
import DeathsByAgeChart from './components/DeathsByAgeChart';

const Country = ({ match }) => {
  const { id } = match.params;

  return (
    <div className="country">
      <Scores />
      <DeathsByAgeChart />
    </div>
  );
};

export default Country;
