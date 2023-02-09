import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import Achievement from '../assets/imgs/d01.png';
import M01 from '../assets/imgs/m01.jpg';
import L03 from '../assets/imgs/l03.jpg';
import D01 from '../assets/imgs/d01.jpg';
import L01 from '../assets/imgs/l01.jpg';
import L02 from '../assets/imgs/l02.jpg';
import D02 from '../assets/imgs/d02.jpg';
import S01 from '../assets/imgs/s01.jpg';
import '../components/top/top.css';

import Menu from '../components/top/Menu';
import Meal from '../components/top/Meal';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const meals = [
  { id: 1, type: "Morning", date: "05.21", img: M01 },
  { id: 2, type: "Lunch", date: "05.21", img: L03 },
  { id: 3, type: "Dinner", date: "05.21", img: D01 },
  { id: 4, type: "Snack", date: "05.21", img: L01 },
  { id: 5, type: "Morning", date: "05.20", img: M01 },
  { id: 6, type: "Lunch", date: "05.20", img: L02 },
  { id: 7, type: "Dinner", date: "05.20", img: D02 },
  { id: 8, type: "Snack", date: "05.21", img: S01 }
]

const dataFat = [
  { "month": 1, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 2, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 3, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 4, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 5, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 6, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 7, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 8, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 9, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 10, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 11, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
  { "month": 12, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 }
]

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
  },
  // Modify the axis by adding scales
  scales: {
    x: {
      ticks: {
        color: "#FFFFFF",
        callback: function (value) {
          return this.getLabelForValue(value) + "月";
        }
      },
      grid: {
        color: "#777777"
      },
      border: {
        display: false
      }
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false
      },
      border: {
        color: "#777777"
      }
    },
  },
};

let dataFatSort = dataFat.sort((a, b) => b.value - a.value);
const labels = dataFatSort.map((data) => data.month);

const dataChart = {
  labels,
  datasets: [
    {
      label: 'Body weight',
      data: dataFatSort.map((data) => data.value),
      borderColor: '#FFCC21',
    },
    {
      label: 'Body fat',
      data: dataFatSort.map((data) => data.value + Math.floor(Math.random() * (30 - (-20) + 1)) + (-20)),
      borderColor: '#8FE9D0',
    },
  ],
};

function Top() {
  const [data, setData] = useState(meals);
  const [dataFilter, setDataFilter] = useState([]);
  const [type, setType] = useState("");

  const filterMeal = (type) => {
    let arr = [];

    arr = data.filter(meal => meal.type === type);

    setDataFilter(arr);
    setType(type);
  }

  const handleLoadMore = () => {
    let arr = data;

    if (type) {
      arr = dataFilter.concat(meals.filter(meal => meal.type === type));
      setDataFilter(arr);
    } else {
      arr = arr.concat(meals);
      setData(arr);
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-5 block-achievement pe-0">
          <img className="" src={Achievement} alt="Date－Achievement" />
        </div>
        <div className="col-12 col-md-7 block-fat-graph pt-3 px-5">
          <Line options={options} data={dataChart} />;
        </div>
      </div>
      <div className="block-menu d-flex flex-wrap flex-row justify-content-center">
        <Menu title="Morning" filterMeal={filterMeal} />
        <Menu title="Lunch" filterMeal={filterMeal} />
        <Menu title="Dinner" filterMeal={filterMeal} />
        <Menu title="Snack" className="icon-snack" filterMeal={filterMeal} />
      </div>
      <div className="block-meal">
        <div className="row">
          {dataFilter.length > 0 ? (dataFilter.map((meal, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-3 px-1 mt-2">
              <Meal type={meal.type} img={meal.img} date={meal.date} />
            </div>
          ))) : (
            data.map((meal, idx) => (
              <div key={idx} className="col-12 col-md-6 col-xl-3 px-1 mt-2">
                <Meal type={meal.type} img={meal.img} date={meal.date} />
              </div>
            )))}
        </div>
      </div>
      <div className="text-center mt-3 mb-5">
        <button type="button" className="btn btn-primary btn-more" onClick={handleLoadMore}>記録をもっと見る</button>
      </div>
    </>
  );
}

export default Top;