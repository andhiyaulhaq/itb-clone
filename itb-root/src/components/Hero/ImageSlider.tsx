import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import React, { useState } from "react";

interface Slide {
  url: string;
  title: string;
}

interface SlideShowProps {
  slideArray: Slide[];
}

const ImageSlider: React.FC<SlideShowProps> = ({ slideArray }) => {
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

  return (
    <div className="relative">
      <div className="w-full h-auto flex overflow-hidden">
        {slideArray.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            alt=""
            className="w-full h-auto object-cover block"
          />
        ))}
      </div>
      <p className="text-center">{slideArray[imageIndex].title}</p>
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
    </div>
  );
};

export default ImageSlider;
