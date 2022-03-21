import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

  LineController, 
  LineElement, 
  PointElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController, 
  LineElement, 
  PointElement,
);

function ReportChart(props) {
  return (
    <div>
    <Line data={props.data} style={{maxWidth:"70vw"}}/>
</div>
  )
}

export default ReportChart