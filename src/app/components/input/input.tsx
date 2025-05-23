import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input ref={ref} {...props} className="border p-2 w-full rounded-md" />
    </label>
  );
});

Input.displayName = "Input"

export default Input;