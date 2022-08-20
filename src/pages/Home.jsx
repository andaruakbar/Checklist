import React, { useContext, useState } from "react";
import Layuot from "../component/Layuot";
import CreateTitle from "../modal/CreateTitle";
import CardFront from "../component/CardFront";
import { TodoContext } from "../context/TodoContext";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { todoList } = useContext(TodoContext);
  console.log(todoList);
  return (
    <Layuot>
      <div className="flex flex-col text-center">
        <span className="mt-10 font-bold text-4xl mb-5">List Todo</span>
        <div>
          <button
            className="px-3 py-2 font-bold text-white bg-blue-500 rounded-md "
            onClick={() => setOpen(!open)}
          >
            Create Todo
          </button>
        </div>

        <div className="grid grid-flow-row auto-rows-max gap-6 my-8 mx-10 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 content-center">
          {todoList.map((item) => (
            <CardFront name={item.name} id={item.id} />
          ))}
        </div>
        <CreateTitle open={open} setOpen={setOpen}></CreateTitle>
      </div>
    </Layuot>
  );
};

export default Home;
