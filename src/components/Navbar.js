import React from "react";

const navbar = () => {
  const menuItem = ["Home", "Features", "Services", "Login"];
  return (
    <div className="w-full flex justify-between bg-white py-6 px-16 text-black items-center">
      <p className="font-bold text-2xl">SELV.CO</p>
      <div className="flex gap-12 items-center">
        {menuItem.map((item, index) => (
          <p className={item === "Login" ? "bg-black text-white px-8 py-2 rounded-full" : ""} key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default navbar;
