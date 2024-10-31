import Image from 'next/image';
import member1 from '../../../public/assets/images/team/1.jpg'
import member2 from '../../../public/assets/images/team/2.jpg'
import member3 from '../../../public/assets/images/team/3.jpg'
import social from '../../../public/assets/midia.svg'

const Team = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center">
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={member1}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center justify-center  items-center   w-full">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <Image src={social} alt="" className='h-[30%]  m-auto' />
        </div>
      </div>
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={member2}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <Image src={social} alt="" className='h-[30%] m-auto'/>
        </div>
      </div>
      <div className="card card-compact w-full md:w-[300px] bg-base-100 shadow-md rounded-md border p-2 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
        <figure>
          <Image
            src={member3}
            alt="Shoes"
            className="h-[170px] my-2  rounded-lg "
          />
        </figure>
        <div className="p-2 text-center">
          <h2 className="text-2xl">Car Engine </h2>
          <p className="py-1">Engine Expert</p>
          <Image src={social} alt="" className='h-[30%] m-auto'/>
        </div>
      </div>
    </div>
  );
};

export default Team;