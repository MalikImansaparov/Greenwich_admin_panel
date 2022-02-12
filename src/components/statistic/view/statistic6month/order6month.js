import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Январь',
    доход: 2500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    доход: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    доход: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    доход: 2890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Февраль',
    доход: 3480,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2 неделя',
    доход: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '3 неделя',
    доход: 2890,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '4 неделя',
    доход: 2490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Март',
    доход: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    доход: 2200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    доход: 3400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    доход: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Апрель',
    доход: 2890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2 неделя',
    доход: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '3 неделя',
    доход: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '4 неделя',
    доход: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Май',
    доход: 4000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2 неделя',
    доход: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '3 неделя',
    доход: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '4 неделя',
    доход: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Июнь',
    доход: 3390,
    pv: 3800,
    amt: 2500,
  },
];

export const Order6Month = () => {

  return (
    <ResponsiveContainer width="100%" height="70%">
      <AreaChart
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
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="доход" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
