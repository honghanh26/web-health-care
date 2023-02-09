function Diary(props) {
  return (
    <div className="item-diary px-3 pt-3 pb-4">
      <div className="date">
        {props.date}
      </div>
      <div className="title mt-2">
        {props.title}
      </div>
      <div className="desc">
        {props.desc}
      </div>
    </div>
  );
}

export default Diary;