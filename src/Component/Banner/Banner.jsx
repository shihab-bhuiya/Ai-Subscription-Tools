import React from "react";
import img from '../../assets/banner.png'
import { FaRegCircleDot } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Left Side */}
      <div className="space-y-5 text-center lg:text-left">
        <button className="flex items-center gap-2 rounded-2xl bg-[#E1E7FF] text-[#4F39F6] px-4 py-2 text-sm whitespace-nowrap">
  <FaRegCircleDot />
  <span>New: AI-Powered Tools Available</span>
</button>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-gray-600 text-base sm:text-lg">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br className="hidden lg:block" />
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-3 justify-center lg:justify-start">
          <button className="btn btn-primary rounded-2xl px-6 py-3">Explore Products</button>
          <button className="btn rounded-2xl px-6 py-3">Watch Demo</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
        <img src={img} alt="Banner" className="w-full max-w-md lg:max-w-lg" />
      </div>

    </div>
  );
};

export default Banner;