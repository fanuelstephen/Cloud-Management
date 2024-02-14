import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineChip } from "react-icons/hi";
import { HiOutlineSupport } from "react-icons/hi";
import { MdArrowRightAlt } from "react-icons/md";

import supportImg from "../assets/support.jpg";

function Support() {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={supportImg}
          alt=""
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="py-4 px-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            FInding the right Team
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            accusamus, possimus adipisci quae exercitationem, culpa deleniti ea
            eligendi optio magni, asperiores corrupti quidem ipsum quod vero
            provident blanditiis repellat iure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="bg-indigo-600 w-16 p-4 flex justify-center rounded-lg mt-[-3.8rem]">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>

              <h3 className="font-bold text-2xl my-6">Sales</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea
                dolore odit libero natus possimus perferendis quaerat sed
                officia adipisci.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact us <MdArrowRightAlt className=" ml-2 text-3xl mt-1" />
              </p>
            </div>
          </div>

          {/* number 2 */}
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="bg-indigo-600 w-16 p-4 flex justify-center rounded-lg mt-[-3.8rem]">
                <HiOutlineSupport className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-2xl my-6">Techical Support</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea
                dolore odit libero natus possimus perferendis quaerat sed
                officia adipisci.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact us <MdArrowRightAlt className=" ml-2 text-3xl mt-1" />
              </p>
            </div>
          </div>

          {/* number3 */}

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <div className="bg-indigo-600 w-16 p-4 flex justify-center rounded-lg mt-[-3.8rem]">
                <HiOutlineChip className="text-white text-2xl" />
              </div>
              <h3 className="font-bold text-2xl my-6">Media Inqueries</h3>
              <p className="text-xl text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ea
                dolore odit libero natus possimus perferendis quaerat sed
                officia adipisci.
              </p>
            </div>

            <div className="pl-8 py-4 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact us <MdArrowRightAlt className=" ml-2 text-3xl mt-1" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
