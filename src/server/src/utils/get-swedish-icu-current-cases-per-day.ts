import getFromIcuregSwe from './get-from-icureg-swe';

const payload = 'highChartUrl=/api/reports/GenerateHighChart&tableUrl=/api/reports/GenerateExcel&chartWidth=900&reportName=corona.covid-dagligen&startdat=2020-01-01&sasong%5B0%5D=2019';

export default getFromIcuregSwe(payload);
