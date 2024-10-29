import Image from "next/image";
import Link from "next/link";
import React from "react";

import img2 from "../../../public/assets/images/banner/3.jpg";
import img3 from "../../../public/assets/Framed.svg";
import img4 from "../../../public/assets/Framewhite.svg";
import arro from "../../../public/assets/Framewhite.svg";
import ivideo from "../../../public/assets/Framevideo.svg";
import arro2 from "../../../public/assets/Frame@1x.svg";
import logo2 from "../../../public/assets/logo.svg";

const Page = () => {
  return (
    <div className="text-black">
      <div className="img">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-white absolute top-1/2 left-[10%]">
          ServiceDetails
        </h2>
        <div className="bg-red-500 absolute bottom-0 px-10 p-3 md:left-[40%]  text-white rounded-t-xl ">
          <Link href={"/"}>Home</Link> / <Link href="/servicedetails">ServiceDetails</Link>
        </div>
      </div>

      <div className="w-full mx-auto my-10  flex gap-5 flex-wrap ">
        <div className="w-full md:w-[68%]  ">
          <div>
            <Image
              src={img2}
              alt="Car Engine Service"
              className="bg-cover bg-center rounded-lg max-h-96 w-full"
            />
          </div>
          <div>
            <h2 className="text-4xl my-10">Unique Car Engine Service</h2>
            <p className="text-gray-400 mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text.
            </p>
          </div>

          <div className="w-full flex flex-wrap justify-between gap-5 ">
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Instant Car Services</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">24/7 Quality Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Easy Customer Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
            <div className="w-full md:w-[48%] hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-[#f3f3f3] p-3 border-t-4 border-red-500 rounded-lg">
              <h2 className="text-2xl mt-5">Quality Cost Service</h2>
              <p className="text-gray-400 my-5  ">
                It uses a dictionary of over 200 Latin words, combined with a
                model sentence structures.
              </p>
            </div>
          </div>
          <div className="my-10">
            <p className="text-gray-400 mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text.
            </p>
          </div>
          <div className="images flex justify-center items-center">
            <Image src={ivideo} alt="Video thumbnail" />
          </div>
        </div>

        <div className="w-full md:w-[30%] ">
          <div className="rounded-lg  my-5">
            <div className="bg-[#f3f3f3] p-5 rounded-lg shadow-md ">
              <div>
                <h2 className="text-2xl font-semibold mb-4"> Services</h2>
              </div>
              <div className="flex justify-between items-center rounded-lg shadow-md bg-red-500 text-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Full Car Repair</h4>
                <Image src={arro} alt="Arrow icon" />
              </div>
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Engine Repair</h4>
                <Image src={arro2} alt="Arrow icon" />
              </div>
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Automatic Services</h4>
                <Image src={arro2} alt="Arrow icon" />
              </div>
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Engine Oil Change</h4>
                <Image src={arro2} alt="Arrow icon" />
              </div>
              <div className="flex justify-between items-center rounded-lg shadow-md bg-white my-3 p-5 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
                <h4 className=""> Battery Charge</h4>
                <Image src={arro2} alt="Arrow icon" />
              </div>
            </div>
          </div>
          <div className="w-full bg-black rounded-lg p-5 ">
            <div className="text-white my-2 text-2xl ">
              <h2>Download</h2>
            </div>
            <div className="flex justify-between items-center my-5 relative">
              <div>
                <Image src={img3} alt="Brochure icon" />
              </div>
              <div className="absolute left-1/4">
                <h3 className="text-white ">Our Brochure</h3>
                <p className="text-gray-400 ">Download</p>
              </div>
              <div className="bg-red-500 rounded-lg p-2 ">
                <Image src={img4} alt="Download icon" />
              </div>
            </div>
            <div className="flex justify-between items-center relative">
              <div>
                <Image src={img3} alt="Company details icon" />
              </div>
              <div className="absolute left-1/4">
                <h3 className="text-white ">Company Details</h3>
                <p className="text-gray-400 ">Download</p>
              </div>
              <div className="bg-red-500 rounded-lg p-2 ">
                <Image src={img4} alt="Download icon" />
              </div>
            </div>
          </div>

          <div className="w-full bg-black rounded-lg p-5 my-10 justify-center items-center flex-wrap">
            <div className="text-white w-4/5 m-auto p-5 items-center justify-center flex">
              <Image src={logo2} alt="Company logo" />
            </div>
            <div className="text-white w-4/5 m-auto p-5 items-center justify-center flex text-center">
              <h2 className="">Need Help? We Are Here To Help You</h2>
            </div>
            <div className="bg-white md:w-4/5 m-auto rounded-lg relative my-10  p-5 items-center justify-center flex flex-col">
              <h2 className="text-2xl">
                <span className="text-red-500">Car Doctor</span> Special
              </h2>
              <h4 className="text-gray-400 my-5">
                Save up to <span className="text-red-500">60% off</span>
              </h4>
              <button className="bg-red-500 px-10 text-white absolute bottom-[-20px] btn border-none  ">
                Get A Quote
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl my-5">Price $250.00</h2>
            <button className="  w-full bg-red-500 text-white  btn border-none  ">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;