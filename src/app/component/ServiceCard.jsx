import Image from "next/image";
import i from "../../../public/assets/Frame@1x.svg";
import Link from "next/link";

const ServiceCard = ({ service,  }) => {
  const { title, img, price, _id } = service;
  

  return (
    <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 ">
      <figure>
        <Image
          height={600}
          width={600}
          src={img}
          alt="Shoes"
          className="h-[170px] my-2  rounded-lg "
        />
      </figure>
      <div className="p-2  justify-between">
        <h2 className="card-title">{title}</h2>
        <div className="w-full flex justify-between">
          <div className="">
            <p className="font-bold text-red-500">price : {price} $</p>
          </div>
          <div>
            <Link href={`/BookService/${_id}`}>
              <Image
                height={30}
                width={30}
                src={i}
                alt=""
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
