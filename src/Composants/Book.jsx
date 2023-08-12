function Book(props) {
  return (
    <div id="bookList">
      <h3 className="title">{props.title}</h3>
      <img className="image" src={props.image}></img>
      <p className="author">Author : {props.author}</p>
      <div>
        <p className="date">Date de parution : {props.date}</p>
        <p className="note">Note : {props.note}</p>
      </div>
    </div>
  );
}

export default Book;
