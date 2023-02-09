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
import { useState } from 'react';

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

function Top() {
  const [data, setData] = useState(meals);

  const filterMeal = (type) => {
    let arr = [];
    
    arr = meals.filter(meal => meal.type === type);

    setData(arr);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 block-achievement pe-0">
          <img className="" src={Achievement} alt="Date－Achievement" />
        </div>
        <div className="col-7 block-fat-graph">
        </div>
      </div>
      <div className="block-menu d-flex flex-wrap flex-row justify-content-center">
        <Menu title="Morning" filterMeal={filterMeal}/>
        <Menu title="Lunch" filterMeal={filterMeal}/>
        <Menu title="Dinner" filterMeal={filterMeal}/>
        <Menu title="Snack" className="icon-snack" filterMeal={filterMeal}/>
      </div>
      <div className="block-meal">
        <div className="row">
          {data.map((meal, idx) => (
            <div key={idx} className="col-12 col-md-6 col-xl-3 px-1 mt-2">
              <Meal type={meal.type} img={meal.img} date={meal.date} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Top;