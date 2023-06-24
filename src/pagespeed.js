import axios from "axios";
import { Chart } from "chart.js";
const apiUrl =
  "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={URL}&key=AIzaSyCSSqMRhnV--wh4itQaWFgyaVeo6feVBWY";

export const fetchPageSpeedInsightsData = async () => {
  let url = "https://react-to-next-darkknocker.vercel.app/1";
  try {
    const response = await axios.get(
      apiUrl.replace("{URL}", encodeURIComponent(url))
    );
    const data = response.data;

    console.log("Google Metrices: ", data);

    // Extracting metrics from the data
    const metrics = {
      firstContentfulPaint:
        data.lighthouseResult.audits["first-contentful-paint"].displayValue,
      largestContentfulPaint:
        data.lighthouseResult.audits["largest-contentful-paint"].displayValue,
      totalBlockingTime:
        data.lighthouseResult.audits["total-blocking-time"].displayValue,
      speedIndex: data.lighthouseResult.audits["speed-index"].displayValue,
    };

    //Generate graph using extracted metrics

    console.log("mtrcs", metrics);
    generateGraph(metrics);

    const chartData = {
      labels: [
        "First Contentful Paint",
        "Largest Contentful Paint",
        "Total Blocking Time",
        "Speed Index",
      ],
      datasets: [
        {
          label: "Metrics",
          data: [
            parseFloat(metrics.firstContentfulPaint),
            parseFloat(metrics.largestContentfulPaint),
            parseFloat(metrics.totalBlockingTime),
            parseFloat(metrics.speedIndex),
          ],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };

    return chartData;
  } catch (error) {
    console.error(error);
  }
};

const generateGraph = (metrics) => {
  // const canvas = document.getElementById("chart");
  // if (!canvas) {
  //   console.error("Canvas element not found");
  //   return;
  // }
  // const ctx = canvas.getContext("2d");
  // if (!ctx) {
  //   console.error("Canvas context not found");
  //   return;
  // }

  // Prepare data for the chart
  const chartData = {
    labels: [
      "First Contentful Paint",
      "Largest Contentful Paint",
      "Total Blocking Time",
      "Speed Index",
    ],
    datasets: [
      {
        label: "Metrics",
        data: [
          parseFloat(metrics.firstContentfulPaint),
          parseFloat(metrics.largestContentfulPaint),
          parseFloat(metrics.totalBlockingTime),
          parseFloat(metrics.speedIndex),
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Create the chart
  // new Chart(ctx, {
  //   type: "bar",
  //   data: chartData,
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //       },
  //     },
  //   },
  // });
};

const urlToAnalyze = "https://react-to-next-darkknocker.vercel.app/";
// fetchPageSpeedInsightsData(urlToAnalyze);

// const getMetrices = async () => {
//   await fetchPageSpeedInsightsData(urlToAnalyze);
// };
// export default getMetrices;
