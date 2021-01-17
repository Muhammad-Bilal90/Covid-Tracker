import React from "react";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2/es";

const Chart = ({ confirmed, recovered, deaths, country }) => {
  return (
    <div>
      <Bar data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ['#0000ff80', '#00ff0080', '#ff000080'],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
        options={{
          responsive: true,
          legend: { display: false },
          title: {
            display: true,
            text: country ? `${country}` : `Global`,
            fontSize: 25
          },
        }}
      />
      <Pie data= {{
        labels: ["Infected","Recovered","Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ['#0000ff80', '#00ff0080', '#ff000080'],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      options= {{
        responsive: true,
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: country ? `${country}` : `Global`,
          fontSize: 25,
        },
      }}
      />
    </div>
  );
};

export default Chart;