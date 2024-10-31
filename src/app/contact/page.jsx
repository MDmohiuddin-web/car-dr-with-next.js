import Image from "next/image";
import React from "react";
import info from "../../../public/assets/Group.svg";

const page = () => {
  return (
    <div className="my-10 mx-auto transition duration-500 ease-in-out  flex justify-center items-center">
      <Image src={info} alt="" className="mt-5 md:mt-16 " />
    </div>
  );
};

export default page;
