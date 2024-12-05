import React from "react";

const WishListCart = ({ book }) => {
  const {
    book_image,
    book_name,
    book_writer,
    book_tag,
    book_publish_year,
    book_publisher,
    book_pages,
    book_category,
    book_rating,
  } = book;
  return (
    <div className="mb-4 border border-[#13131399] p-4 rounded-lg">
      <div className="card card-side bg-base-100 ">
        <figure>
          <img src={book_image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-play text-2xl">{book_name}</h2>
          <p>By: {book_writer}</p>
          <div className="flex">
            <p className="font-extrabold">Tag:</p>
            {book_tag.map((tag) => (
              <a className="ml-2 text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-xl">
                {tag}
              </a>
            ))}
          </div>
          <div className="items-center">
            <p>Year of Publishing: {book_publish_year}</p>
            <p>Publisher: {book_publisher}</p>
            <p>Pages: {book_pages}</p>
          </div>
          <hr />

          <div className="card-actions mt-2">
            <button className="btn  bg-[#328EFF26] text-blue-700 rounded-full px-5">
              Category:{book_category}
            </button>
            <button className="btn  bg-[#FFAC3326] text-yellow-700 rounded-full px-5">
              Rating:{book_rating}
            </button>
            <button className="btn  bg-[#23BE0A] text-white rounded-full px-5">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListCart;
