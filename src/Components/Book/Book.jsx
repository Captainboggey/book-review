import React from "react";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";

const Book = ({ book }) => {
    const{book_image,id,book_tag,book_writer,book_name,book_rating,book_category}=book
  return (
    <div>
      <div className="card bg-[#F3F3F3] p-5 ">
        <figure>
          <img
          
            src={book_image}
            alt="book"
          />
        </figure>
        <div className="card-body">
            <div className="flex gap-3 list-none ">
                {
                    book_tag.map(bookTag=><li className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-xl">{bookTag}</li>)
                }
            </div>
          <h2 className="font-play font-bold text-xl">{book_name}</h2>
          <p>By: {book_writer}</p>
          <br />
          <hr />
          <br />
          <div className="flex justify-between">
            <div>
                <p>{book_category}</p>
            </div>
            <div className="flex items-center gap-1">
            <MdOutlineStarBorderPurple500 className="text-xl" />
            <p className="text-xl">{book_rating}</p>
            </div>
          </div>

          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
