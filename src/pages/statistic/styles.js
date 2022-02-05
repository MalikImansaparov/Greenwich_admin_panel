
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "March",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Aprill",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "May",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "June",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "July",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "August",
        uv: 1890,
        pv: 4800,
        amt: 2181
    }

];

export default function Analityc() {
    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    );
}
