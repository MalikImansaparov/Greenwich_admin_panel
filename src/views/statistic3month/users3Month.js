import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Январь', 'Февраль', 'Март'],
  datasets: [
    {
      label: 'Пользователи',
      data: [567, 789, 890],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      responsive: true,
      maintainAspectRatio: false
    },
  ],
};

export function Users3Month() {
  return(
      <div style={{ width: '350px',height: '450px', marginLeft: '50px'}}>
        <Pie data={data}  options={{ maintainAspectRatio: true, responsive: true, }}/>
      </div>
  )
}
