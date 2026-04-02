import React, { useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="font-extrabold text-pink-600 text-3xl">DigiTools</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg">
            <h2 className="hover:text-pink-600 cursor-pointer">Product</h2>
            <h2 className="hover:text-pink-600 cursor-pointer">Features</h2>
            <h2 className="hover:text-pink-600 cursor-pointer">Pricing</h2>
            <h2 className="hover:text-pink-600 cursor-pointer">Testimonial</h2>
            <h2 className="hover:text-pink-600 cursor-pointer">FAQ</h2>
          </div>

          {/* Right Buttons - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button className="btn"><IoMdCart /></button>
            <button className="btn">Login</button>
            <button className="btn btn-primary rounded-2xl w-30">Get Started</button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)}>
              {open ? <HiX className="w-6 h-6"/> : <HiMenu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pt-4 pb-2 space-y-2 bg-white shadow-md">
          <h2 className="block hover:text-pink-600 cursor-pointer">Product</h2>
          <h2 className="block hover:text-pink-600 cursor-pointer">Features</h2>
          <h2 className="block hover:text-pink-600 cursor-pointer">Pricing</h2>
          <h2 className="block hover:text-pink-600 cursor-pointer">Testimonial</h2>
          <h2 className="block hover:text-pink-600 cursor-pointer">FAQ</h2>

          <div className="flex flex-col gap-2 mt-2">
            <button className="btn btn-soft w-full flex justify-center items-center gap-2"><IoMdCart /> Cart()</button>
            <button className="btn w-full">Login</button>
            <button className="btn btn-primary w-full rounded-2xl">Start</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;