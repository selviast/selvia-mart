import React from "react";

const Header = () => {
  return (
    <div className="w-full flex bg-primarygrey">
      <div className="px-16 py-20 w-[50%] flex-col flex gap-5">
        <div className="flex-col flex gap-5 ">
          <h1 className="font-gabarito font-[800] text-[80px] leading-none">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-[16px] text-gray-500">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white rounded-full w-44 h-9 text-[12px] font-semibold">
            Shop Now
          </button>
        </div>
        <div className="flex gap-4 justify-between">
          <div>
            <p className="text-[40px]">200+</p>
            <p className="text-sm text-gray-500">International Brands</p>
          </div>
          <div>
            <p className="text-[40px]">2,000+</p>
            <p className="text-sm text-gray-500">High-Quality Products</p>
          </div>
          <div>
            <p className="text-[40px]">30,000+</p>
            <p className="text-sm text-gray-500">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-end">
        <img className="h-[600px]" src="/images/header-image.png"></img>
      </div>
    </div>
  );
};

export default Header;
