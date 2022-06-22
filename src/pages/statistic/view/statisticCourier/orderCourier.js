import React from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer, BarChart, Bar,
} from 'recharts';


export const OrderCourier = () => {
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
          <Bar type="monotone" dataKey="доставок" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </BarChart>
      </ResponsiveContainer>
  );
};
