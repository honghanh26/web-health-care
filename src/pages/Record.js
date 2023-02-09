
import MyRecommend1 from '../assets/imgs/MyRecommend-1.jpg';
import MyRecommend2 from '../assets/imgs/MyRecommend-2.jpg';
import MyRecommend3 from '../assets/imgs/MyRecommend-3.jpg';
import '../components/record/record.css';

import Menu from '../components/record/Menu';
import Excersise from '../components/record/Exercise';
import Diary from '../components/record/Diary';

import { useRef, useState, useEffect } from 'react';
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
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const list = [
	{ id: 1, type: "body", title: "BODY RECORD", desc: "自分のカラダの記録", img: MyRecommend1 },
	{ id: 2, type: "exercise", title: "MY EXERCISE", desc: "自分の運動の記録", img: MyRecommend2 },
	{ id: 3, type: "diary", title: "MY DIARY", desc: "自分の日記", img: MyRecommend3 },
]
const excersise = { id: 1, title: "家事全般（立位・軽い）", desc: "26kcal", time: "10 min" }
const diary = { id: 1, title: "私の日記の記録が一部表示されます。", desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…", date: "2021.05.21 23:25" }

let dataFatYear = [], dataFatMonth = [], dataFatWeek = [], dataFatDay = [];
[...Array(12).keys()].map((index) => (
	dataFatYear.push({ "name": index + 1, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 })
));
[...Array(30).keys()].map((index) => (
	dataFatMonth.push({ "name": index + 1, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 })
));
[...Array(24).keys()].map((index) => (
	dataFatDay.push({ "name": index, "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 })
));
dataFatWeek = [
	{ "name": "日", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "月", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "火", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "水", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "木", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "金", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
	{ "name": "土", "value": Math.floor(Math.random() * (100 - 0 + 1)) + 0 },
]

function Record() {
	const [count, setCount] = useState(1);
	const [type, setType] = useState("year");
	const [dataFatSort, setDataFatSort] = useState([]);
	let bodyRef = useRef();
	let exerciseRef = useRef();
	let diaryRef = useRef();

	useEffect(() => {
		switch (type) {
			case "year":
				setDataFatSort(dataFatYear.sort((a, b) => b.value - a.value));
				break;
			case "month":
				setDataFatSort(dataFatMonth.sort((a, b) => b.value - a.value));
				break;
			case "day":
				setDataFatSort(dataFatDay.sort((a, b) => b.value - a.value));
				break;
			case "week":
				setDataFatSort(dataFatWeek.sort((a, b) => b.value - a.value));
				break;
			default:
				break;
		}
	}, [type]);

	const options = {
		responsive: true,
		maintainAspectRatio: false,
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
						return this.getLabelForValue(value) + (type === "year" ? "月" : (type === "month" ? "日" : (type === "day" ? "時" : "")));
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

	const labels = dataFatSort.map((data) => data.name);
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
				data: dataFatSort.map((data) => data.value + Math.floor(Math.random() * (30 - 0 + 1)) + 0),
				borderColor: '#8FE9D0',
			},
		],
	};

	const handleScroll = (type) => {
		switch (type) {
			case "body":
				bodyRef.current.scrollIntoView({ behavior: 'smooth' })
				break;
			case "exercise":
				exerciseRef.current.scrollIntoView({ behavior: 'smooth' })
				break;
			case "diary":
				diaryRef.current.scrollIntoView({ behavior: 'smooth' })
				break;
			default:
				break;
		}
	}

	return (
		<>
			<div className="row mt-2 mt-md-4">
				{list.map((item, idx) => (
					<div key={idx} className="col-12 col-sm-6 col-lg-4 mt-3">
						<Menu type={item.type} img={item.img} title={item.title} desc={item.desc} handleScroll={handleScroll} />
					</div>
				))}
			</div>
			<div ref={bodyRef} className="block-body-record my-2 my-md-5">
				<div className="title-body-record">
					<span className="d-inline-block align-middle">BODY RECORD</span>
					<span className="date">2021.05.21</span>
				</div>
				<div className="chart-body-record">
					<div className="block-line-chart">
						<Line options={options} data={dataChart} />;
					</div>
					<div className="block-filter mt-2">
						<button type="button" className={`btn btn-light rounded-pill px-3 py-0 ${(type === "day" ? "active" : "")}`} data-type="day" onClick={(e) => { setType(e.currentTarget.dataset.type) }}>日</button>
						<button type="button" className={`btn btn-light rounded-pill px-3 py-0 ms-3 ${(type === "week" ? "active" : "")}`} data-type="week" onClick={(e) => { setType(e.currentTarget.dataset.type) }}>週</button>
						<button type="button" className={`btn btn-light rounded-pill px-3 py-0 ms-3 ${(type === "month" ? "active" : "")}`} data-type="month" onClick={(e) => { setType(e.currentTarget.dataset.type) }}>月</button>
						<button type="button" className={`btn btn-light rounded-pill px-3 py-0 ms-3 ${(type === "year" ? "active" : "")}`} data-type="year" onClick={(e) => { setType(e.currentTarget.dataset.type) }}>年</button>
					</div>
				</div>
			</div>
			<div ref={exerciseRef} className="block-exercise my-2 my-md-5">
				<div className="title-exercise">
					<span className="d-inline-block align-middle">MY EXERCISE</span>
					<span className="date">2021.05.21</span>
				</div>
				<div className="list-exercise">
					<ul className="list-group list-group-flush">
						<div className="row mx-0">
							{[...Array(15)].map((item, index) => (
								<div key={index} className="col-12 col-md-6 px-0">
									<Excersise title={excersise.title} time={excersise.time} desc={excersise.desc} />
								</div>
							))
							}
						</div>
					</ul>
				</div>
			</div>
			<div ref={diaryRef} className="block-diary">
				<div className="title">MY DIARY</div>
				<div className="row">
					{[...Array(8 * count)].map((item, index) => (
						<div key={index} className="col-12 col-sm-6 col-lg-3 px-1 mt-2">
							<Diary title={diary.title} date={diary.date} desc={diary.desc} />
						</div>
					))
					}
				</div>
			</div>
			<div className="text-center mt-3 mb-5">
				<button type="button" className="btn btn-primary btn-more" onClick={() => { setCount(previousCount => previousCount + 1) }}>自分の日記をもっと見る</button>
			</div>
		</>
	);
}

export default Record;