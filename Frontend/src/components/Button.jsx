import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "w-full py-3 rounded-md bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:brightness-110 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out " +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
