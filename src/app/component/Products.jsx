import Engine from "../../../public/assets/images/products/1.png";
import are from "../../../public/assets/images/products/3.png";
import EnginePlugs from "../../../public/assets/images/products/6.png";
import spring from "../../../public/assets/images/products/2.png";
import tire from "../../../public/assets/images/products/5.png";
import battery from "../../../public/assets/images/products/4.png";

import star from "../../../public/assets/star.svg";
import Image from "next/image";


const Products = () => {
  return (
    <div className="my-5 flex flex-wrap capitalize gap-5 justify-center w-4/5 mx-auto ">
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={Engine}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl my-1">Car Brick </h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 1 */}
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={are}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl my-1">Car Air Filter</h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 2 */}
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={EnginePlugs}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl">Car Engine Plug</h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 3 */}
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={tire}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl">Car Brick spring</h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 4 */}
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={spring}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl">Car Tire</h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 5 */}
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={battery}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="text-center  justify-between w-full ">
          <Image src={star} alt="" className="w-4/5 m-auto h-[20%]" />
          <h2 className="font-semibold text-2xl">Care Battery</h2>
          <p className="font-bold text-red-500"> $ 20</p>
        </div>
      </div>
      {/* 6 */}
    </div>
  );
};

export default Products;