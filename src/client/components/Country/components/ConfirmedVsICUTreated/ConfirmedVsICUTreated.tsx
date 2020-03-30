import React, { useEffect, useState } from 'react';
import { getSweICUTimeseries } from '../../../../api';
import BarChart from '../../../BarChart';

interface ConfirmedVsICUTreatedProps {
  confirmed: any[]
}

const ConfirmedVsICUTreated = ({ confirmed }: ConfirmedVsICUTreatedProps) => {
  const [ICU, setICU] = useState<Record<string, any>>({});

  useEffect(() => {
    getSweICUTimeseries().then(setICU);
  }, []);

  const rows = ICU?.Rows || [];

  const dates = rows.map((item) => item[0]);
  const ICUPatients = rows.map((item) => +item[2]);
  const todaysTotal = confirmed[confirmed.length - 2] || [];
  const confirmedCases = dates.map((date) => (+todaysTotal[date] || +todaysTotal.Today));

  const series = [{
    name: 'Confirmed',
    data: confirmedCases.reverse(),
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }, {
    name: 'ICU Patients',
    data: ICUPatients.reverse(),
    dataLabels: {
      crop: false,
      enabled: true,
    },
  }];

  return (
    <BarChart xValues={dates.reverse()} title="Confirmed Cases and ICU Patients" series={series} />
  );
};

export default ConfirmedVsICUTreated;
