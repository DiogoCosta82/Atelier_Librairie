import { useState } from "react";
import "./App.css";
import Book from "./Composants/Book";
import "./Composants/Book.css";

function App() {
  let array = [
    {
      title: "Le seigneur des anneaux",
      author: "JRR Tolkien",
      date: "1954",
      note: 5,
      image:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
    },
    {
      title: "Fondation",
      author: "Isaac Asimov",
      date: "1951",
      note: 4.8,
      image:
        "https://images.leslibraires.ca/books/9782070360536/front/9782070360536_large.jpg",
    },
    {
      title: "Harry Potter",
      author: "JK Rowling",
      date: "199npm7",
      note: 4.9,
      image: "https://m.media-amazon.com/images/I/81m1s4wIPML.jpg",
    },
  ];

  const renderMyArray = () => {
    return array.map((item) => {
      return (
        <div>
          <Book
            title={item.title}
            image={item.image}
            author={item.author}
            date={item.date}
            note={item.note}
          />
        </div>
      );
    });
  };

  return (
    <>
      <div className="title">
        <h1>My Librairie</h1>
      </div>
      <div className="bookL">{renderMyArray()}</div>
    </>
  );
}

export default App;
