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
  maintainAspectRatio: false,
  layout: {
    padding: 8,
  },
  plugins: {
    legend: {
      position: 'top' as const,
      align: 'end' as const,
      labels: {
        boxWidth: 10,
        boxHeight: 10,
        borderRadius: 10,
        color: "#161819",
        usePointStyle: true,
        pointStyle: 'circle',
        font: {
          size: 14,
          weight: 400,
          lineHeight: 2,
          family: 'Poppins'
        },
      },
    },
    title: {
      display: false,
      align: 'start' as const,
      text: 'Review statistics for the last 7 days',
      color: '#000000',
      font: {
        size: 22,
        weight: 400,
        lineHeight: 1.5,
        family: 'Poppins'
      },
    },
    tooltip: {
      backgroundColor: '#B1222C',
      titleColor: '#fff',
      bodyColor: '#fff',
      fontWeight: 500,
      padding: 8,
      cornerRadius: 15,
      displayColors: false, // 👈 removes little color box
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      ticks: {
        callback: function (value: any) {
          return value + 'k';
        }
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
};

const createDiagonalPattern = (color: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 10;
  canvas.height = 10;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;

  // diagonal line
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.lineTo(10, 0);
  ctx.stroke();

  return ctx.createPattern(canvas, 'repeat');
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const realData = [
  { bar: 30 },
  { bar: 10 },
  { bar: 20 },
  { bar: 30 },
  { bar: 20 },
  { bar: 10 },
  { bar: 20 },
  { bar: 10 },
  { bar: 10 },
  { bar: 20 },
  { bar: 60 },
  { bar: 30 },
]

const data = {
  labels,
  datasets: [
    {
      label: 'Expenses',
      data: realData.map((item) => { return (item.bar) }),
      backgroundColor: createDiagonalPattern("#EBEBEB") || "#FFFFFF",
      borderRadius: 30,
    },
    {
      label: 'Income',
      data: realData.map((item) => { return (item.bar) }),
      backgroundColor: createDiagonalPattern("#EBEBEB") || "#FFFFFF",
      borderRadius: 30,
    },
  ],
};

const BarChart = () => {
  return <div className="h-[290px] sm:h-[300px]">
    <Bar data={data} options={options} />
  </div>
}

export default BarChart;