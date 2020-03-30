import getFromIcuregSwe from './get-from-icureg-swe';

const payload = 'highChartUrl=/api/reports/GenerateHighChart&tableUrl=/api/reports/GenerateExcel&chartWidth=900&reportName=vtfstart-corona&startdat=2020-01-01&stopdat=2020-03-30&sasong%5B0%5D=2019';

export default getFromIcuregSwe(payload);
