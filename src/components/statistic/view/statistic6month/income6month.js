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
    заказы: 2500,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    заказы: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    заказы: 1000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    заказы: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Февраль',
    заказы: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2 неделя',
    заказы: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '3 неделя',
    заказы: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '4 неделя',
    заказы: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Март',
    заказы: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2 неделя',
    заказы: 2200,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3 неделя',
    заказы: 3400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4 неделя',
    заказы: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Апрель',
    заказы: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2 неделя',
    заказы: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '3 неделя',
    заказы: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '4 неделя',
    заказы: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Май',
    заказы: 4000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2 неделя',
    заказы: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '3 неделя',
    заказы: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '4 неделя',
    заказы: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Июнь',
    заказы: 2390,
    pv: 3800,
    amt: 2500,
  },
];

export const Income6Month = () => {
  const demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  return (
    <ResponsiveContainer width="100%" height="100%">
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
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="заказы"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
