import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Янв',
    Пользователи: 2600,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Фев',
    Пользователи: 2390,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Март',
    Пользователи: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Апр',
    Пользователи: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Май',
    Пользователи: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Июнь',
    Пользователи: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Июль',
    Пользователи: 3190,
    pv: 4300,
    amt: 2100,
  },
];

export const Users6Month = () => {
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
        <Bar dataKey="Пользователи" fill="#38A83A" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};
