import React from "react";

const Hotel = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        Hotel <span className="text-white">Booking</span>
      </h1>
      <div className="flex justify-center">
        <progress className="progress  w-44 mt-2 bg-orange-700"></progress>
      </div>
    </div>
  );
};

export default Hotel;
