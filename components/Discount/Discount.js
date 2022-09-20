import React from "react";

const Discount = () => {
  return (
    <div className="mt-20">
        <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        Hotel <span className="text-white">Discount</span>
      </h1>
      <div className="hero min-h-screen bg-black text-white">
        <div  className="hero-content flex-col lg:flex-row">
          <img
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
            src="https://avatars.mds.yandex.net/i?id=91d2685cc9a0b0e4fa8dac3570edfa96-5294721-images-thumbs&n=13&exp=1"
            className=""
          />
          <div className="mx-20">
            <h1 data-aos="zoom-in"
            data-aos-duration="3000"
             className="text-5xl font-bold">Hotel saymon !</h1>
            <p className="py-6">
            Discounting is typically done to achieve additional revenues by enticing guests into booking hotel rooms by lowering rates in order to increase occupancy in the short term. It is a well-known fact amongst senior revenue management experts, that decreasing room rate does not bring higher room revenues.
            </p>
            <p className="text-2xl font-bold text-orange-500">Discount Offer Per Day :$700</p>
            <div className="pt-5">
            <button className="btn btn-primary ">Booking Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
