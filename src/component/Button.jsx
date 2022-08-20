import React from "react";

function Button({
  color,
  radius,
  border,
  borderWidth,
  textColor,
  padding,
  icon,
  id,
  label,
  loading,
  onClick,
  type,
}) {
  const mystyle = {
    backgroundColor: color,
    borderRadius: radius,
    borderColor: border,
    borderWidth: borderWidth,

    color: textColor,
    padding: padding,
  };

  return (
    <button
      id={id}
      type={type}
      className={`flex justify-center bg-blue-600 text-white font-semibold py-1 px-6 rounded-[4px] ${
        loading && "bg-gray-700 cursor-not-allowed"
      }`}
      onClick={onClick}
      disabled={loading}
      style={mystyle}
    >
      {icon}
      {label}
    </button>
  );
}

export default Button;
