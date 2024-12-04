import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div>
      <h1 className="font-bold text-3xl text-center font-play">Books</h1>
      <div className="grid md:grid-cols-3 mx-auto gap-2 items-center">
        { 
          books.map((book) => (<Book key={book.id} book={book}></Book> ))
         }
      </div>
    </div>
  );
};

export default Books;
