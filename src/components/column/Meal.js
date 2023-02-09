function Meal(props) {
  return (
    <div className="item-meal">
      <div className="position-relative">
        <img src={props.img} className="img-thumbnail rounded-0 p-0" alt={props.type}></img>
        <div className="title position-absolute">{props.date}<span className="ms-3">{props.time}</span></div>
      </div>
      <div className="desc mt-2">{props.desc}</div>
      <ul className="d-flex flex-row list-type">
        {
          props.type.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default Meal;