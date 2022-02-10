
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Понедельник',
        Доход: 1000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Вторник',
        Доход: 2500,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Среда',
        Доход: 1800,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Четверг',
        Доход: 3780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Пятьница',
        Доход: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Субота',
        Доход: 3390,
        pv: 2800,
        amt: 2500,
    },
    {
        name: 'Воскресенья',
        Доход: 2790,
        pv: 4300,
        amt: 2100,
    },
];

export const OrderWeek = () => {
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
                <Area type="monotone" dataKey="Доход" stroke="#487349" fill="#9C9C9C" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
