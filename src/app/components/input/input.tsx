import React from "react";

interface InputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, id, value, placeholder, onChange }: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-gray-700 font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="text-black border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>
  );
};

export default Input;