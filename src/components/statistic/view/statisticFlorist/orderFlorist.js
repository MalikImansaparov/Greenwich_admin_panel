import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer, Line, LineChart, BarChart, Bar,
} from 'recharts';

const data = [
  {
    name: 'Январь',
    доход: 25,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    доход: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    доход: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    доход: 28,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Февраль',
    доход: 34,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2 неделя',
    доход: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '3 неделя',
    доход: 28,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '4 неделя',
    доход: 24,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Март',
    доход: 40,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    доход: 22,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    доход: 34,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    доход: 17,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Апрель',
    доход: 28,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2 неделя',
    доход: 23,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '3 неделя',
    доход: 34,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '4 неделя',
    доход: 30,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Май',
    доход: 40,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2 неделя',
    доход: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '3 неделя',
    доход: 27,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '4 неделя',
    доход: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Июнь',
    доход: 33,
    pv: 3800,
    amt: 2500,
  },
];

export const OrderFlorist = () => {

  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar type="monotone" dataKey="доход" stroke="#82ca9d" fillOpacity={1} fill="url(#colorUv)" />
        </BarChart>
      </ResponsiveContainer>
  );
};
