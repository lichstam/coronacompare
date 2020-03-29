import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom';
import App from '../client/App';

const html = fs.readFileSync('dist/index.html').toString();
const [firstPart, secondPart] = html.split('Rendering...');

export default (req, res) => {
  const react = (
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  res.send(`${firstPart}${renderToString(react)}${secondPart}`);
};
