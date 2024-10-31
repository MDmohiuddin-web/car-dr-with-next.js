import item from "../../../public/assets/icons/check.svg";
import group from "../../../public/assets/icons/group.svg";
import TimelyDelivery from "../../../public/assets/icons/watch.svg";
import BestEquipment from "../../../public/assets/icons/Wrench.svg";
import Support from "../../../public/assets/icons/person.svg";
import Delivery from "../../../public/assets/icons/deliveryt.svg";
import Image from "next/image";

const ChooseUsCards = () => {
  return (
    <div className="flex flex-wrap gap-5 w-full   p-2 justify-center mb-10">
      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px]">
        <Image src={group} alt="" />
        <p>Expert Team</p>
      </div>
      {/*  */}
      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px] bg-red-500 text-white">
        <Image src={TimelyDelivery} alt="" />
        <p>Delivery Time </p>
      </div>
      {/*  */}
      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px]">
        <Image src={Support} alt="" />
        <p>24/7 Support</p>
      </div>
      {/*  */}

      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px]">
        <Image src={BestEquipment} alt="" />
        <p>Best Equipment</p>
      </div>
      {/*  */}
      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px]">
        <Image src={item} alt="" />
        <p>100% Guaranty </p>
      </div>
      {/*  */}
      <div className="hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-[130px] border gap-5 text-center items-center justify-center flex flex-col rounded-md shadow-md w-full md:w-[140px]">
        <Image src={Delivery} alt="" />
        <p>Timely Delivery</p>
      </div>
      {/*  */}
    </div>
  );
};

export default ChooseUsCards;
