import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between shadow-lg z-10">
      <div className="flex items-center font-bold gap-6 ml-4">
        <Link to="/">
          <span>TodoList</span>
        </Link>
      </div>
      <div className="flex items-center font-bold gap-4">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
