const jHopkins = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series';
const elinlutz = 'https://raw.githubusercontent.com/elinlutz/gatsby-map/master/src/data/time_series';

export const sweICU = 'https://portal.icuregswe.org/siri/api/reports/GenerateHighChart';

export const sweAgeDeaths = 'https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&groupByFieldsForStatistics=%C3%85ldersgrupp2&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Totalt_antal_avlidna%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true';

export const deathsUrl = `${jHopkins}/time_series_covid19_deaths_global.csv`;
export const confirmedCasesUrl = `${jHopkins}/time_series_covid19_confirmed_global.csv`;

export const deathsSwedenUrl = `${elinlutz}/time_series_deaths-deaths.csv`;
export const confirmedCasesSwedenUrl = `${elinlutz}/time_series_confimed-confirmed.csv`;

export const worldPopulation = '../../assets/population.csv';
