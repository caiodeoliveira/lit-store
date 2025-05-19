import React from "react";

interface InputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  placeholder: string;
  styles: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, type, id, value, placeholder, styles, onChange }: InputProps) => {
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
        className={styles}
        required
      />
    </div>
  );
};

export default Input;