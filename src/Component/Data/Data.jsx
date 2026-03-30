import React from 'react';

const Data = ({data}) => {
  console.log(data);
    return (
        <div className='m-5'>
            
    
    <div className="max-w-sm mx-auto bg-gray-100 rounded-2xl p-5  shadow-md relative">
      
      {/* Badge */}
      <div className= {`  absolute top-4 right-4 ${data.tag === 'Best Seller' ? 'bg-yellow-100' : data.tag === "Popular" ? 'bg-blue-500 text-white': data.tag === 'New' ?'bg-[#2EB967]' :'white'} text-sm px-3 py-1 rounded-full `}>
        {data.tag}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow mb-4">
       <img src={data.image} alt="" />  
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
       {data.name}
      </h2>

      {/* Description */}
      <p className="text-gray-500 mb-4">
        {data.description}
      </p>

      {/* Price */}
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">${data.price}</span>
        <span className="text-gray-500">/Mo</span>
      </div>

      {/* Features */}
      <ul className="mb-6 space-y-2 text-gray-600">
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> {data.feature1}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> {data.feature2}
        </li>
        <li className="flex items-center gap-2">
          <span className="text-green-500">✔</span> {data.feature3}
        </li>

      </ul>

      {/* Button */}
      <button className="w-full py-3 rounded-full btn btn-primary font-semibold bg-gradient-r from-purple-600 to-pink-50 hover:opacity-90 transition">
        Buy Now
      </button>
    
    </div>
  



        </div>
    );
};

export default Data;