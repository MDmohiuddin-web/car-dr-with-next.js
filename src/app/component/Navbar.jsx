"use client";
import logo from "../../../public/assets/logo.svg";

import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const user = true;
  const links = (
    <>
      <li className="text-black">
        <Link href="/">Home </Link>
      </li>
      <li className="text-black">
        <Link href="/about">about</Link>
      </li>
      <li className="text-black">
        <Link href="Services">Services</Link>
      </li>
      <li className="text-black">
        <Link href="/ServiceDetails">Blog</Link>
      </li>
      <li className="text-black">
        <Link href="/Contact">Contact</Link>
      </li>

      {/* <li className="text-black">
            <
            Link href="/signup">sign up</
            Link>
          </li> */}

      {/* i dent need it  */}
      {/* {user?.email ? (
        <>
          <li className="text-black">
            <Link href="/Booking">Booking</Link>
          </li>
          <li className="text-black">
            <Link href="/Profile">Profile</Link>
          </li>
        </>
      ) : (
        <li className="text-black">
          <Link href="/login">Log in</Link>
        </li>
      )} */}
      {/*  */}
    </>
  );
  return (
    <div className="navbar bg-base-100 md:px-20 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/">
          <Image
            alt=""
            src={logo}
            className="md:w-[100px] h-[50px] lg:w-[150px] "
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-5">
        <IoCartOutline className="text-xl text-black" />
        <IoSearchSharp className="text-xl text-black" />
        <button className="text-red-500 btn-outline btn  ">Appointment</button>

        {user ? (
          <div className="dropdown dropdown-end text-black">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  width={100}
                  height={100}
                  alt=""
                  title={user?.displayName}
                  src={
                    user?.photoURL ||
                    "https://source.unsplash.com/150x150/?portrait?3"
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/Profile" className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </Link>
              </li>
              <li>
                <button className="btn   btn-ghost">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;
