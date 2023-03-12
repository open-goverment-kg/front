import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", complaint: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", complaint: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", complaint: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", complaint: 2780, pv: 3908, amt: 2000 },
  { name: "May", complaint: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", complaint: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", complaint: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", complaint: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", complaint: 3490, pv: 4300, amt: 2100 },
  { name: "Oct", complaint: 3490, pv: 4300, amt: 2100 },
  { name: "Nov", complaint: 3490, pv: 4300, amt: 2100 },
  { name: "Dec", complaint: 3490, pv: 4300, amt: 2100 },
];

const Chart = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="complaint" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Chart;
