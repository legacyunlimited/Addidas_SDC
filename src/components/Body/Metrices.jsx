import React, { useEffect, useState, useRef } from "react";
import { fetchPageSpeedInsightsData } from "../../pagespeed.js";
import Chart from "chart.js/auto";

const Metrices = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const returnedData = await fetchPageSpeedInsightsData();
      console.log("returned data>>>", returnedData);
      setData(returnedData);
    };

    fetchData();
  }, []);

  useEffect(() => {
    let chartInstance = null;

    const createChart = () => {
      if (data) {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstance) {
          chartInstance.destroy(); // Destroy previous chart instance
        }

        chartInstance = new Chart(ctx, {
          type: "bar",
          data: {
            labels: data.labels.map((item, index) => `${index}: ${item}`),
            datasets: [
              {
                label: "uv",
                data: data.datasets[0].data.map((item) => item),
                backgroundColor: "#8884d8",
              },
              // {
              //   label: "pv",
              //   data: data.datasets[0].data.map((item) => item),
              //   backgroundColor: "#82ca9d",
              // },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: "Page",
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "Value",
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    };

    createChart();

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy chart instance when component unmounts
      }
    };
  }, [data]);

  return <>{data ? <canvas ref={chartRef} /> : <h2>Loading...</h2>}</>;
};

export default Metrices;
