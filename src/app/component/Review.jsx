import Image from "next/image";
import React from "react";
import img1 from "../../../public/assets/review1.png";
import img2 from "../../../public/assets/review2.png";

const Review = () => {
  return (
    <div className="carousel w-full">
      <div id="review1" className="carousel-item relative w-full">
        <div className="flex gap-5 my-5 justify-center items-center w-full">
          <Image src={img1} alt=""></Image>
          <Image src={img2} alt=""></Image>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#review3"
            className="btn btn-circle bg-[#616c7d] border-0 text-white"
          >
            ❮
          </a>
          <a
            href="#review2"
            className="btn btn-circle bg-red-500 border-0  text-white "
          >
            ❯
          </a>
        </div>
      </div>
      <div id="review2" className="carousel-item relative w-full">
        <div className="flex gap-5 my-5 justify-center items-center w-full">
          <Image src={img2} alt=""></Image>
          <Image src={img1} alt=""></Image>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#review1"
            className="btn btn-circle bg-[#616c7d] border-0 text-white"
          >
            ❮
          </a>
          <a
            href="#review3"
            className="btn btn-circle bg-red-500 border-0  text-white "
          >
            ❯
          </a>
        </div>
      </div>
      <div id="review3" className="carousel-item relative w-full">
        <div className="flex gap-5 my-5 justify-center items-center w-full">
          <Image src={img2} alt=""></Image>
          <Image src={img1} alt=""></Image>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#review2"
            className="btn btn-circle bg-[#616c7d] border-0 text-white"
          >
            ❮
          </a>
          <a
            href="#review2"
            className="btn btn-circle bg-red-500 border-0  text-white "
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
