/** @format */

import React from "react";
import img from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 sm: grid-cols-1 sm:mx-auto  items-center gap-35 max-w-300 mx-auto">
      <div className="space-y-5">
        <button className="rounded-2xl bg-[#E1E7FF] text-[#4F39F6]">
          New: AI-Powered Tools Available
        </button>
        <h1 className="font-bold text-6xl mb-4">
          Supercharge Your <br /> Digital Workflow
        </h1>
        <p>
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br />
          Explore Products
        </p>
        <div className="flex gap-2 mt-3">
            <button className="btn btn-primary rounded-2xl">Explore Products</button>
            <button className="btn rounded-2xl">Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
