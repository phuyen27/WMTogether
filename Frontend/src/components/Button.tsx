import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const Button = ({ children, onClick, type = "button", disabled = false, className = "" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        "w-full py-3 rounded-md bg-gradient-to-r from-orange-500 via-red-600 to-pink-600 text-white font-bold text-lg shadow-lg hover:brightness-110 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out " +
        (disabled ? "cursor-not-allowed opacity-50" : "") +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
