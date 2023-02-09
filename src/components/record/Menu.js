function Menu(props) {
  return (
    <div className="menu-record position-relative" data-type={props.type} onClick={(e) => {props.handleScroll(e.currentTarget.dataset.type)}}>
      <img src={props.img} className="img-thumbnail border-0 p-0 rounded-0" alt={props.title}/>
      <div className="position-absolute menu-record-content d-flex justify-content-center align-items-center flex-column">
        <h3 className="title">{props.title}</h3>
        <span className="desc w-75 text-center">{props.desc}</span>
      </div>
    </div>
  );
}

export default Menu;