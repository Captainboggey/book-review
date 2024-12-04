import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getReadBook } from "../../Utility/Utility";
import { getWishList } from "../../Utility/WishList";
import ListedCart from "../ListedCart/ListedCart";

const ListedBooks = () => {
  const loadBooks = useLoaderData();
  const [bookRead, setBookRead] = useState([]);
  const [wishBook, setWishBook] = useState([]);

  useEffect(() => {
    const getBooksRead = getReadBook();
    if (loadBooks.length > 0) {
      const books = [];
      for (const id of getBooksRead) {
        const foundedRead = loadBooks.find((book) => book.id === id);
        if (foundedRead) {
          books.push(foundedRead);
          setBookRead(books);
        }
      }
    }
  }, []);

  useEffect(() => {
    const getWishBook = getWishList();
    if (loadBooks.length > 0) {
      const wishBookArray = [];
      for (const id of getWishBook) {
        const foundedWishBook = loadBooks.find((books) => books.id === id);
        if (foundedWishBook) {
          wishBookArray.push(foundedWishBook);
          setWishBook(wishBookArray);
        }
      }
    }
  }, []);
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 2"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
         <div>
            {
                bookRead.map(book=><ListedCart key={book.id} book={book}></ListedCart>)
            }
         </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Tab 3"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
