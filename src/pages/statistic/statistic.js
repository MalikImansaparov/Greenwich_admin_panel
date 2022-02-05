// import React from 'react';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
//

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
// );
//
// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart',
//         },
//     },
// };
//
// const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
// const count = [10,30,50,60,70,30]
// export const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Dataset 1',
//             data: count.map((item) => item),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//
//     ],
// };
//
// export function Statistic() {
//     return <Line options={options} data={data} />;
// }
//
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const count = [10,30,50,80,60,90,100];
export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: count.map((item) => item),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: count.map((item) => item),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Statistic() {
    return <Bar options={options} data={data}/>;
}
