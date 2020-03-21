import express from 'express';
import bodyparser from 'body-parser';
import stats from './src/routes/stats';
import reactApp from './react-app';

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({
  extended: true,
}));

app.use('/dist', express.static('dist'));
app.use('/stats', stats);

app.use(reactApp);

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
