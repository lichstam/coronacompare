import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import App from '../client/App';

const html = fs.readFileSync('dist/index.html').toString();
const [firstPart, secondPart] = html.split('Rendering...');

export default (req, res) => {
  const react = (
    <App />
  );
  res.send(`${firstPart}${renderToString(react)}${secondPart}`);
};
