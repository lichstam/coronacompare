import React from 'react';
import { getDayMinus } from '../../../../utils';

const Scores = ({ deaths, confirmed }) => {
  const Box = ({ children }) => (
    <div className="scores__box">{children}</div>
  );

  const yesterday = getDayMinus(1);
  const totalsDailyDeaths = deaths[deaths.length - 2];
  const totalsDeaths = deaths[deaths.length - 1];
  const totalsDaily = confirmed[confirmed.length - 2];
  const totals = confirmed[confirmed.length - 1];

  const totalScores = [
    <div className="scores__totals">
      <h2>New Cases Today</h2>
      <strong className="scores__score">{ totalsDaily?.Today }</strong>
      <p className="scores__sub-score">
        Yesterday:
        {' '}
        { totals && totalsDaily[yesterday.toString()] }
      </p>
    </div>,
    <div className="scores__totals">
      <h2>Total Confirmed</h2>
      <strong className="scores__score">{ totals?.Today }</strong>
    </div>,
    <div className="scores__totals">
      <h2>Deaths Today</h2>
      <strong className="scores__score">{ totalsDailyDeaths?.Today }</strong>
      <p className="scores__sub-score">
        Yesterday:
        {' '}
        { totalsDeaths && totalsDailyDeaths[yesterday.toString()] }
      </p>
    </div>,
    <div className="scores__totals">
      <h2>Total Deaths</h2>
      <strong className="scores__score">{ totalsDeaths?.Today }</strong>
    </div>,
  ];

  return (
    <div className="scores">
      {totalScores.map((item, i) => (
        <Box key={i}>{ item }</Box>
      ))}
    </div>
  );
};

export default Scores;
