function Meal(props) {
  return (
    <div className="position-relative item-meal">
      <img src={props.img} className="img-thumbnail rounded-0 p-0" alt={props.type}></img>
      <div className="title position-absolute">{props.date}.{props.type}</div>
    </div>
  );
}

export default Meal;