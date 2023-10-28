import React from "react";

const Input = ({ label, type, value, name, placeholder, onChange }) => {
  return (
    <div className="flex-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
