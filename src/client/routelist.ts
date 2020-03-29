import Country from './components/Country';
import Overview from './Overview';

export default [
  {
    path: '/:id', Component: Country,
  },
  {
    path: '/', Component: Overview, exact: true,
  },
];
