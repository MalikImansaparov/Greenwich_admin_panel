import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box";

const data = [
    {
        name: 'Пн',
        uv: 1500,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Вт',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Ср',
        uv: 2100,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Чт',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Пт',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Сб',
        uv: 2390,
        pv: 2800,
        amt: 2500,
    },
    {
        name: 'Вс',
        uv: 3200,
        pv: 4300,
        amt: 2100,
    },
];

export const IncomeWeek = () => {
        return (
                <ResponsiveContainer width="100%" height="75%">
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
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#487349" fill="#9C9C9C" />
                    </AreaChart>
                </ResponsiveContainer>
        );
}
