import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // импорт важен для решения проблемы "linear" is not a registered scale

const ProfilePage = () => {
  const data = {
    labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    datasets: [
      {
        label: 'Количество заказов',
        data: [12, 15, 20, 18, 25, 30, 28, 22, 19, 17, 14, 10],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div>
      <h2>График заказов</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ProfilePage;
