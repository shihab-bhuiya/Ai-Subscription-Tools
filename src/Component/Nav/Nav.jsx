import React from 'react';
import { IoMdCart } from "react-icons/io";

const Nav = () => {
    return (
        <div className='m-4'>
            <div className='  flex items-center justify-evenly'>
                <div className='font-extrabold text-pink-600 text-3xl'>
                    DigiTools
                </div>
                <div className='flex justify-center gap-5 text-l'>
                    <h2>Product</h2>
                    <h2>Features</h2>
                    <h2>Pricing</h2>
                    <h2>Testomonial</h2>
                    <h2>FAQ</h2>
                </div>
                <div className='gap-3 itm'>
                    <button className='btn'><IoMdCart /></button>
                    <button className='btn'>Login</button>
                    <button className='btn btn-primary rounded-2xl w-30'>Start</button>
                </div>
            </div>
</div>
    );
};

export default Nav;