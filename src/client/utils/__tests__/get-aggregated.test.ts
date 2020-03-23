import getAggregated from '../get-aggregated';

describe('#getAggregated', () => {
  const getAggregatedByCountry = getAggregated('Country/Region');
  const data = [
    { 'Country/Region': 'Sweden', date1: '123' },
    { 'Country/Region': 'Sweden', date1: '200' },
  ];

  it('Should return correct format', () => {
    const expected = [{ 'Country/Region': 'Sweden', date1: 323 }];
    const result = getAggregatedByCountry(data);
    expect(result).toMatchObject(expected);
  });
});
