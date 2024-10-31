import Image from "next/image";
import React from "react";
import logo1 from "../../../public/assets/time.svg";
import logo2 from "../../../public/assets/message.svg";
import logo3 from "../../../public/assets/location.svg";
const page = () => {
  return (
    <div className="my-10 mx-auto transition duration-500 ease-in-out bg-black p-10 rounded-md flex flex-wrap gap-x-10">
      {/* 1 */}
      <div className="flex  items-center gap-5 w-96">
        <Image alt="" src={logo1}></Image>
        <div className="text-white space-y-2 py-5">
          <h1 className="text-2xl font-bold">We are open monday-friday</h1>
          <p className="text-2xl md:text-4xl">7:00 am - 9:00 pm</p>
        </div>
      </div>
      {/* 2 */}
      <div className="flex  items-center gap-5 w-96">
        <Image alt="" src={logo2}></Image>
        <div className="text-white space-y-2 py-5">
          <h1 className="text-2xl font-bold">Have a question?</h1>
          <p className="text-2xl md:text-4xl">+2546 251 2658</p>
        </div>
      </div>
      {/* 3 */}
      <div className="flex  items-center gap-5 w-96">
        <Image alt="" src={logo3}></Image>
        <div className="text-white space-y-2 py-5">
          <h1 className="text-2xl font-bold"> Need a repair? our address</h1>
          <p className="text-2xl md:text-3xl">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default page;
