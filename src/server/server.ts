import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import stats from './src/routes/stats';
import reactApp from './react-app';

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({
  extended: true,
}));

const whitelist = [
  'https://www.coronalation.com',
  'https://coronalation.com',
  'https://strong-market-269209.appspot.com',
  'http://localhost:8080',
];

const corsConfig = {
  origin(origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsConfig));
app.use('/dist', express.static('dist'));
app.use('/stats', stats);

app.use(reactApp);

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
