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

const getAggregated = (propName: string) => pipe(
  groupBy(prop(propName)),
  values,
  map(reduce(
    mergeWith(ifElse((n) => !isNaN(+n), add, identity)),
    {},
  )),
);

export default getAggregated;
