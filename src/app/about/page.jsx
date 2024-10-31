import img2 from "../../../public/assets/images/about_us/parts.jpg";
import img1 from "../../../public/assets/images/about_us/person.jpg";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-wrap gap-5 py-10 my-10 ">
      <div className="md:w-[48%] relative">
        <Image src={img1} alt="" className="w-3/4 rounded-lg" />
        <Image
          src={img2}
          alt=""
          className="md:w-1/2 absolute right-5 md:top-40 rounded-lg border-white border-8 photo"
        />
      </div>
      {/*  */}
      <div className="md:w-[48%] space-y-3 px-5 text-center md:text-left">
        <h4 className="text-red-500 font-bold text-4xl">about us</h4>
        <h2 className="md:text-5xl font-bold text-black">
          We are qualified & of experience in this field
        </h2>
        <p className="text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which dent look even slightly believable.
        </p>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which dent look even slightly believable.
        </p>
        <Link
          href="/ServiceDetails"
          className="bg-red-500 hover:bg-black text-white  btn border-none  "
        >
          Get More Info
        </Link>
      </div>
    </div>
  );
};

export default page;
