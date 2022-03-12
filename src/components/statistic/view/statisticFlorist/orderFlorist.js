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
    name: 'Янв',
    продаж: 25,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2нед',
    продаж: 30,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3нед',
    продаж: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4нед',
    продаж: 28,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Фев',
    продаж: 34,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2нед',
    продаж: 18,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '3нед',
    продаж: 28,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '4нед',
    продаж: 24,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Мар',
    продаж: 40,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2нед',
    продаж: 22,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3нед',
    продаж: 34,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4нед',
    продаж: 17,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Апр',
    продаж: 28,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2нед',
    продаж: 23,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '3нед',
    продаж: 34,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '4нед',
    продаж: 30,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Май',
    продаж: 40,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '2нед',
    продаж: 20,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '3нед',
    продаж: 27,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '4нед',
    продаж: 18,
    pv: 4800,
    amt: 2181,
  },
];

export const OrderFlorist = () => {

  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={700}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 20,
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
          <Bar type="monotone" dataKey="продаж" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </BarChart>
      </ResponsiveContainer>
  );
};
