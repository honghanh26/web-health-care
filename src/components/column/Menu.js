function Menu(props) {
  return (
    <div className="d-flex justify-content-center align-items-center item-menu p-4 flex-column">
      <div className="title text-center">
        {props.title}
      </div>
      <div className="line my-2"></div>
      <div className="type">
        {props.type}
      </div>
    </div>
  );
}

export default Menu;