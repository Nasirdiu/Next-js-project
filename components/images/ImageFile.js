import React from "react";

const ImageFile = ({ images }) => {
  return (
    <div data-aos="flip-right"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
     className="mt-5 hover:modal-action">
      <img  src={images.img} alt="" />
    </div>
  );
};

export default ImageFile;
