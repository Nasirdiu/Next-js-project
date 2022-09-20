import React from "react";

const HotelBooking = ({ hotels }) => {
  
  return (
    <div className="mt-5">
      <div data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
           className="card card-compact w-96 bg-base-100 shadow-xl hover:bg-slate-400">
        <figure>
          <img 
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
         
          src={hotels.img} alt="" />
        </figure>
        <div className="card-body">
          <h2 
          data-aos="zoom-in"
          data-aos-duration="3000"
             className="card-title">Hotel Name: {hotels.name}</h2>
          <p>
            <span className="font-bold">Description:</span>
            {hotels.description}
          </p>
          <p className="font-bold">Per Day Prize:${hotels.regular_price}</p>
          <div data-aos="zoom-in"
            data-aos-duration="3000"
             className="card-actions justify-end">
            <button className="btn btn-sm btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
