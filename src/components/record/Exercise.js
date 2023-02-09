function Exercise(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start me-2 me-md-5">
      <div className="ms-2 me-auto">
        <div className="fw-bold title">{props.title}</div>
        <span className="desc">{props.desc}</span>
      </div>
      <span className="time">{props.time}</span>
    </li>
  );
}

export default Exercise;