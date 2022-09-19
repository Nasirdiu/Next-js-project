import React from "react";

const HotelBooking = ({ hotels }) => {
  return (
    <div className="mt-5">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={hotels.img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Hotel Name: {hotels.name}</h2>
          <p><span className="font-bold">Description:</span>{hotels.description}</p>
          <p className="font-bold">Prize:${hotels.regular_price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-secondary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
