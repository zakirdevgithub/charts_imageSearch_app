import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Container, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import { Line, Bar, Radar, Doughnut, Pie } from "react-chartjs-2";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import BarChartIcon from "@material-ui/icons/BarChart";
import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import PieChartIcon from "@material-ui/icons/PieChart";

export const Charts = () => {
  const initialValue: string[] = [];
  const totalDeathsInit: number[] = [];
  const [countryArray, setCountryArray] = useState(initialValue);
  const [deathArray, setdeathArray] = useState(totalDeathsInit);
  const [chartType, setChartType] = useState("");

  useEffect(() => {
    let dataStorage: string[] = [];
    let totalDeaths: number[] = [];
    const getData = async () => {
      const covidData = await axios.get("https://api.covid19api.com/summary");
      for (let i = 10; i < 20; i++) {
        // countries.push(covidData.data.Countries[i].Countries)
        dataStorage.push(covidData.data.Countries[i].Country);
        totalDeaths.push(covidData.data.Countries[i].TotalDeaths);
      }
      setCountryArray(dataStorage);
      setdeathArray(totalDeaths);
    };
    getData();
  });

  const data = {
    labels: countryArray,
    datasets: [
      {
        label: "COVID-19 Deaths",
        data: deathArray,
        backgroundColor: [
          "#214252",
          "#1c2b2d",
          "#cf7500",
          "#e7305b",
          "#9a1f40",
          "#0779e4",
          "#363062",
          "#2b580c",
          "#3e206d",
          "#232020",
        ],
        borderColor: [],
        borderWidth: 1,
      },
    ],
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };
  return (
    <>
      {/* <Container id="chartButton"> */}

      <div className="container">
        <div className="row">
          <div className="col-4 d-flex justify-content-center text-center"></div>
        </div>
      </div>

      <div className="container">
        <div className="row ">
          <div className="col w-responsive center text-center mx-auto p-3 mt-2">
            <div>
              <h1>COVID-19 TOTAL DEATHS</h1>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group" id="btngroup">
                  <Button onClick={() => setChartType("Line")}>
                    <ShowChartIcon />
                    Line Chart
                  </Button>
                  <Button onClick={() => setChartType("Bar")}>
                    <BarChartIcon />
                    Bar Chart
                  </Button>
                  <Button onClick={() => setChartType("Radar")}>
                    <TrackChangesIcon />
                    Radar Chart
                  </Button>
                  <Button onClick={() => setChartType("Doughnut")}>
                    <DonutLargeIcon />
                    Doughnut Chart
                  </Button>
                  <Button onClick={() => setChartType("Pie")}>
                    <PieChartIcon />
                    Pie Chart
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>

            <div>
              {chartType === "" && <Line data={data} options />}
              {chartType === "Line" && <Line data={data} options />}
              {chartType === "Bar" && <Bar data={data} options />}
              {chartType === "Radar" && <Radar data={data} options />}
              {chartType === "Doughnut" && <Doughnut data={data} options />}
              {chartType === "Pie" && <Pie data={data} options />}
            </div>
            {/* <Container id="chartPage"> */}
          </div>
        </div>
      </div>
    </>
  );
};
