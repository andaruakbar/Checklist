import React from "react";
import Header from "./Header";

const Layuot = (props) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto justify-between bg-white">
      <Header />
      <div className="h-full w-full">{props.children}</div>
    </div>
  );
};

export default Layuot;
