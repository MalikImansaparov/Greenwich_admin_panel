import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Пн',
        Пользователи: 420,
        pv: 400,
        amt: 240,
    },
    {
        name: 'Вт',
        Пользователи: 500,
        pv: 398,
        amt: 221,
    },
    {
        name: 'Ср',
        Пользователи: 270,
        pv: 300,
        amt: 229,
    },
    {
        name: 'Чт',
        Пользователи: 378,
        pv: 390,
        amt: 200,
    },
    {
        name: 'Пт',
        Пользователи: 289,
        pv: 480,
        amt: 218,
    },
    {
        name: 'Сб',
        Пользователи: 390,
        pv: 380,
        amt: 250,
    },
    {
        name: 'Вс',
        Пользователи: 490,
        pv: 430,
        amt: 210,
    },
];

export const UsersWeek = () => {
        return (
            <ResponsiveContainer width="100%" height="70%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="Пользователи" fill="#487349" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        );
}
