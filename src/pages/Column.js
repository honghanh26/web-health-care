import { useState } from 'react';
import column1 from '../assets/imgs/column-1.jpg';
import column2 from '../assets/imgs/column-2.jpg';
import column3 from '../assets/imgs/column-3.jpg';
import column4 from '../assets/imgs/column-4.jpg';
import column5 from '../assets/imgs/column-5.jpg';
import column6 from '../assets/imgs/column-6.jpg';
import column7 from '../assets/imgs/column-7.jpg';
import column8 from '../assets/imgs/column-8.jpg';
import '../components/column/column.css';

import Menu from '../components/column/Menu';
import Meal from '../components/column/Meal';

const list = [
  { id: 1, type: "オススメ", title: "RECOMMENDED COLUMN" },
  { id: 2, type: "ダイエット", title: "RECOMMENDED DIET" },
  { id: 3, type: "美容", title: "RECOMMENDED BEAUTY" },
  { id: 4, type: "健康", title: "RECOMMENDED HEALTH" }
]

const meals = [
  { id: 1, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column1, type: ["魚料理", "和食", "DHA"] },
  { id: 2, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column2, type: ["魚料理", "和食", "DHA"] },
  { id: 3, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column3, type: ["魚料理", "和食", "DHA"] },
  { id: 4, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column4, type: ["魚料理", "和食", "DHA"] },
  { id: 5, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column5, type: ["魚料理", "和食", "DHA"] },
  { id: 6, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column6, type: ["魚料理", "和食", "DHA"] },
  { id: 7, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column7, type: ["魚料理", "和食", "DHA"] },
  { id: 8, desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", date: "2021.05.17", time: "23:25", img: column8, type: ["魚料理", "和食", "DHA"] }
]

function Column() {
  const [data, setData] = useState(meals);

  const loadMore = () => {
    setData(data.concat(meals));
  }

  return (
    <>
      <div className="row mt-2 mb-3 mt-md-4 mb-md-5">
        {list.map((item, idx) => (
          <div key={idx} className="col-12 col-sm-6 col-lg-3 mt-3">
            <Menu type={item.type} title={item.title} />
          </div>
        ))}
      </div>
      <div className="block-meal row">
        {data.map((meal, idx) => (
          <div key={idx} className="col-12 col-md-6 col-xl-3 px-1 mt-2">
            <Meal type={meal.type} img={meal.img} date={meal.date} time={meal.time} desc={meal.desc} />
          </div>
        ))}
      </div>
      <div className="text-center mt-3 mb-5">
        <button type="button" className="btn btn-primary btn-more" onClick={loadMore}>コラムをもっと見る</button>
      </div>
    </>
  );
}

export default Column;