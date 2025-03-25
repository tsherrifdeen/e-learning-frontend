import React from "react";

const InputField = (label, register, type = "text", placeholder) => {
  return (
    <div className="p-3">
      <label htmlFor={label} className="text-[#555E6C]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={label}
        className="w-[100%] h-10 p-3 border border-[1px solid #555E6C] rounded-lg"
        {...register}
      />
    </div>
  );
};

export default InputField;
