function Menu(props) {
  return (
    <div className="hexagon d-flex justify-content-center align-items-center">
      <div className={`icon-menu ${props.className ?? ""}`} data-type={props.title} onClick={(e) => {props.filterMeal(e.target.dataset.type)}}>
        {props.title}
      </div>
    </div>
  );
}

export default Menu;