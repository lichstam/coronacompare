import csv from 'csvtojson';
import path from 'path';
import { worldPopulation } from '../../constants';

const getPopulation = async () => csv()
  .fromFile(path.resolve(__dirname, worldPopulation));

export default getPopulation;
