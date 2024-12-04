import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setReadBook } from '../../Utility/Utility';
import { setWishList } from '../../Utility/WishList';

const BookDetails = () => {
    const book = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    console.log(typeof id)
    const foundedBook = book.find(book=> book.id===idInt);

    const handleReadBtn =()=>{
        setReadBook(idInt)
        toast('Added To Read Books')
    }
    const handleWishListBtn = ()=>{
        setWishList(idInt)
        toast('Added To Wish List')
    }
    return (
        <div>
            {/* main div */}
            <div className='md:flex justify-center md:gap-60 mt-10 md:mt-20'>
                {/* sub div 1 */}
                <div className='flex justify-center mb-10'>
                    <img src={foundedBook.book_image} alt="" />

                </div>
                {/* sub div 2 */}
                <div className='space-y-4'>
                    <h1 className='text-6xl font-play '>{foundedBook.book_name}</h1>
                    <h2>By: {foundedBook.book_writer}</h2>
                    
                    <hr />
                    
                    <h2>{foundedBook.book_category}</h2>
                    
                    <hr />
                    
                    <p>
                        <span className='font-extrabold'>Review </span>{foundedBook.book_review}
                    </p>
                    <div className='flex gap-2 list-none items-center'>
                        <p className='font-extrabold'>Tag</p>
                        {
                            foundedBook.book_tag.map(tag=><li className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-xl">{tag}</li>)
                        }
                    </div>
                    
                    <hr />
                    
                    <p>Number of Pages:<span className='font-extrabold'>        {foundedBook.book_pages}</span> </p>
                    <p>Publisher: <span className='font-extrabold'>{foundedBook.book_publisher}</span></p>
                    <p>Year of Publishing: <span className='font-extrabold' >{foundedBook.book_publish_year}</span></p>
                    <p>Rating: <span className='font-extrabold'>
                        {foundedBook.book_rating}</span></p>
                     <div className='flex gap-2'>
                        <button onClick={handleReadBtn} className='btn text-black bg-transparent'>Read</button>
                        <button onClick={handleWishListBtn} className='btn bg-[#50B1C9] text-black'>Wishlist</button>
                     </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;