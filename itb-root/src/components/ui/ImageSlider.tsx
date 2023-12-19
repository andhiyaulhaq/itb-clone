import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

import { SlideShowProps } from "@/types";
import { useState } from "react";

const ImageSlider = ({ slideArray }: SlideShowProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return slideArray.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === slideArray.length - 1) return 0;
      return index + 1;
    });
  }

  // function chooseImage() {
  //   setImageIndex()
  // }

  return (
    <>
      <div className="block relative w-full mt-24">
        <div className="w-full flex overflow-x-hidden mt-3">
          <a href={slideArray[imageIndex].url} className="w-full">
            {/* {slideArray.map((slide, index) => (
              <img
                key={index}
                src={slide.url}
                alt=""
                className="w-full object-cover block"
              />
            ))} */}
            <img
              src={slideArray[imageIndex].src}
              alt={slideArray[imageIndex].title}
              className="w-full"
            />
          </a>
        </div>
        <button
          onClick={showPrevImage}
          className="block absolute top-0 bottom-0 p-4 cursor-pointer left-0 hover:bg-slate-900"
        >
          <ArrowBigLeft className="stroke-black fill-white w-8 h-8" />
        </button>
        <button
          onClick={showNextImage}
          className="block absolute top-0 bottom-0 p-4 cursor-pointer right-0 hover:bg-slate-900"
        >
          <ArrowBigRight className="stroke-black fill-white w-8 h-8" />
        </button>
        {/* <div>
          {slideArray.map(() => (

          ))}
        </div> */}
      </div>
      {/* <p className="text-center">{slideArray[imageIndex].title}</p> */}
    </>
  );
};

export default ImageSlider;
