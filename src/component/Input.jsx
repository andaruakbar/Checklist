import React from "react";

function Input({
  type,
  id,
  multiple,
  required,
  placeholder,
  value,
  onChange,
  disabled,
  radius,
}) {
  const mystyle = {
    borderRadius: radius,
  };

  return (
    <input
      className="w-full px-3 py-1 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
      id={id}
      type={type}
      multiple={multiple}
      onChange={onChange}
      disabled={disabled}
      required={required}
      defaultValue={value}
      placeholder={placeholder}
      style={mystyle}
    />
  );
}

export { Input };
