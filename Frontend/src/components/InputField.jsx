import React from "react";
import { MdEmail, MdLock } from "react-icons/md";

const InputField = ({ label, type, value, onChange, placeholder, required }) => {
  const Icon = type === "email" ? MdEmail : type === "password" ? MdLock : null;

  return (
    <div className="mb-6">
      <label
        className="block mb-2 text-sm font-semibold text-gray-300"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        )}
        <input
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-4 py-3 bg-gray-900 text-gray-100 placeholder-gray-500 rounded-md border border-gray-700 shadow-md
            focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500
            hover:scale-[1.02] transition-all duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default InputField;
