import React from "react";
import bannerImg from '../../assets/banner.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:gap-36  lg:flex-row-reverse">
          <img
            src={bannerImg}
            className="max-w-sm rounded-lg "
          />
          <div >
            <h1 className="text-5xl font-bold font-play">Books to freshen up <br /> your bookshelf</h1>
            <br /> <br />

            <Link to={'/listedBooks'}><button className="btn btn-primary">View The List</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
