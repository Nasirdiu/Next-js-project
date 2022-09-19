import React, { useEffect, useState } from "react";
import HotelBooking from "./HotelBooking";

const Hotel = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch("hotel.json")
      .then((res) => res.json())
      .then((data) => setHotel(data));
  }, []);
  console.log(hotel);
  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        Hotel <span className="text-white">Booking</span>
      </h1>
      <div className="flex justify-center">
        <progress className="progress  w-44 mt-2 bg-orange-700"></progress>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5">
        {hotel.map((hotels) => (
          <HotelBooking key={hotels.id} hotels={hotels}></HotelBooking>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
