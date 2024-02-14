import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleMenuButton = () => {
    setNav(!nav);
  };
  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="py-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold ml-4 sm:text-4xl ">BRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            sign In
          </button>
          <button className="px-8 py-3"> sign Up</button>
        </div>
        <div className="md:hidden mr-5" onClick={handleMenuButton}>
          {!nav ? (
            <IoMenuOutline className="text-4xl" />
          ) : (
            <AiOutlineClose className="text-4xl" />
          )}
        </div>

        <ul
          className={
            !nav ? "hidden" : "absolute top-20 w-full px-8 bg-zinc-200"
          }
        >
          <li className="border-b-2 border-b-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-b-zinc-300 w-full">About</li>
          <li className="border-b-2 border-b-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-b-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-b-zinc-300 w-full">Pricing</li>

          <div className="flex flex-col my-4">
            <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
              sign In
            </button>
            <button className="px-8 py-3"> sign Up</button>
          </div>
        </ul>
      </div>
      {/* <AiOutlineClose /> */}
    </div>
  );
}

export default Navbar;
