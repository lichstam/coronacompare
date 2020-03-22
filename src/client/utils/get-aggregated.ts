import {
  pipe,
  groupBy,
  prop,
  values,
  map,
  reduce,
  mergeWith,
  ifElse,
  add,
  identity,
} from 'ramda';

const getAggregated = pipe(
  groupBy(prop('Country/Region')),
  values,
  map(reduce(
    mergeWith(ifElse((n) => !isNaN(+n), add, identity)),
    {},
  )),
);

export default getAggregated;
