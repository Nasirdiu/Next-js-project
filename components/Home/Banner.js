import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://1.bp.blogspot.com/-Irjrhr7HlVA/YNoSx_XtUOI/AAAAAAAAANE/_1ZNTKza88Ys76ry7MK8LGuGYGt2jx6TgCLcBGAsYHQ/s2048/longest-sea-beach-in.jpg")`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Traveling To Cox Bazar</h1>
            <p className="mb-5 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Hotel Booking Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
