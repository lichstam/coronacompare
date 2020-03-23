import { omit } from 'ramda';

export const getPureData = omit(['Province/State', 'Country/Region', 'Lat', 'Long']);
export const stringToNumbers = (data: []) => Object.values(data).map(Number);
export const removeZeros = (data: number[]) => data.filter(Boolean);
export const removeDuplicates = (data: number[]) => data.filter((item, i) => data[i + 1] !== item);

