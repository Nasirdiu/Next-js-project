import React, { useEffect, useState } from "react";
import ImageFile from "./ImageFile";
import Image from "./ImageFile";

const Images = () => {
  const [image, setImages] = useState([]);
  useEffect(() => {
    fetch("image.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
 
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        photo <span className="text-white">gallery</span>
      </h1>
      <div className="flex justify-center">
        <progress className="progress  w-44 mt-2 bg-orange-700"></progress>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
        {image.map((images) => (
          <ImageFile key={"images.id"} images={images}>
            {" "}
          </ImageFile>
        ))}
      </div>
    </div>
  );
};

export default Images;
