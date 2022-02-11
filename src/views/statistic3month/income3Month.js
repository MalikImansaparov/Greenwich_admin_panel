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
    uv: 2500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    uv: 2800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    uv: 1900,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Февраль',
    uv: 3380,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2 неделя',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '3 неделя',
    uv: 3190,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '4 неделя',
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Март',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    uv: 2200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    uv: 3400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Апрель',
    uv: 3890,
    pv: 4800,
    amt: 2181,
  },
];

export const Income3Month = () => {
  const demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  return (
      <ResponsiveContainer width="100%" height="80%">
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
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)"/>
        </AreaChart>
      </ResponsiveContainer>
  );
};
