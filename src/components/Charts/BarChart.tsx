import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// optional pattern
const createPattern = (color: string) => {
  const canvas = document.createElement("canvas");
  canvas.width = 10;
  canvas.height = 10;

  const ctx = canvas.getContext("2d");
  if (!ctx) return color;

  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.lineTo(10, 0);
  ctx.stroke();

  const pattern = ctx?.createPattern(canvas, "repeat")!;
  return pattern || color;
};

type Props = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
    pattern?: boolean;
  }[];

  // dynamic options
  title?: string;
  showTitle?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
  tooltipBg?: string;
  ySuffix?: string;
  borderRadius?: number;
  categoryPercentage?: number;
};

const BarChart = ({
  labels,
  datasets,
  title = "",
  showTitle = false,
  legendPosition = "top",
  tooltipBg = "#B1222C",
  ySuffix = "",
  borderRadius,
  categoryPercentage
}: Props) => {

  // DATA
  const data = {
    labels,
    datasets: datasets.map((d) => ({
      label: d.label,
      data: d.data,
      borderRadius: borderRadius || 0,
      backgroundColor: d.pattern
        ? createPattern(d.color || "#ccc")
        : d.color || "#B1222C",
      legendColor: d.color,
      barPercentage: 0.9,
      categoryPercentage: categoryPercentage || 0.5,
      // barThickness: barWidth || 20,
    })),
  };

  // DYNAMIC OPTIONS
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: 2 },

    plugins: {
      legend: {
        position: legendPosition,
        align: "end" as const,
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          borderRadius: 10,
          color: "#161819",
          usePointStyle: true,
          pointStyle: "circle",
          font: {
            size: 14,
            weight: 400,
            lineHeight: 2,
            family: 'Poppins'
          },
          generateLabels: (chart: any) => {
            return chart.data.datasets.map((ds: any, i: any) => ({
              text: ds.label,
              fillStyle: ds.legendColor || "#000",
              hidden: false,
              datasetIndex: i,
            }));
          },
        },
      },

      title: {
        display: showTitle,
        text: title,
        color: '#000000',
        font: {
          size: 22,
          weight: 400,
          lineHeight: 1.5,
          family: 'Poppins'
        },
      },

      tooltip: {
        backgroundColor: tooltipBg,
        displayColors: false,
        fontWeight: 500,
        padding: 8,
        cornerRadius: 15,
      },
    },

    scales: {
      x: {
        stacked: false,
        grid: { display: false, drawBorder: false, },
        ticks: {
          autoSkip: true,
          maxRotation: 0,
        },
        // 👇 key for responsiveness feel
        categoryPercentage: 0.6,
        barPercentage: 0.5,
      },
      y: {
        ticks: {
          callback: (val: any) => val + ySuffix,
        },
        grid: { display: true, drawBorder: false, },
      },
    },
  };

  return (
    <div className="h-[290px] sm:h-[300px]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;