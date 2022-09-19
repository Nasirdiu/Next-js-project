import React from "react";
import ReviewAll from "./ReviewAll";

const Review = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        All Review
      </h1>
      <div className="flex justify-center">
        <progress className="progress  w-44 mt-2 bg-orange-700"></progress>
      </div>
      <ReviewAll/>
    </div>
  );
};

export default Review;
