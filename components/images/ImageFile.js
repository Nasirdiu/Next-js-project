import React from "react";

const ImageFile = ({ images }) => {
  return (
    <div className="mt-5 hover:modal-action">
      <img  src={images.img} alt="" />
    </div>
  );
};

export default ImageFile;
