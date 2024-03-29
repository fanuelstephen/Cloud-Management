import React from "react";

function About() {
  return (
    <div className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Trusted by developwer accross the world
          </h2>
          <p className="text-3xl py-5 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, quas
            minus dolore incidunt doloremque minima voluptas aut quia eligendi
            maiores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 ">100</p>
            <p className="text-gray-400 mt-3">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 ">24/7</p>
            <p className="text-gray-400 mt-3">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-600 ">100K</p>
            <p className="text-gray-400 mt-3">Transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
