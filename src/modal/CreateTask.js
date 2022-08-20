import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const CreateTask = ({ open, setOpen, id }) => {
  const { handleAddTodoItem } = useContext(TodoContext);
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodoItem({ itemName, id });
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="w-[100vw] h-[100vh] bg-black/20 absolute">
          <div className="relative w-[100%] h-[100%]">
            <form
              onSubmit={handleSubmit}
              className="w-[40vw] h-fit bg-white flex flex-col p-[40px] gap-6 absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <h1 className="text-4xl font-bold ">Title</h1>
              <input
                onChange={(e) => setItemName(e.target.value)}
                type="text"
                placeholder="Title Todo"
                className="w-full px-3 py-1 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <div className="flex font-bold text-white gap-2 justify-center md:justify-end">
                <button
                  className="px-2 py-1 bg-red-600 rounded-md cursor-pointer hover:ring-1 hover:ring-red-600 hover:bg-white hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  CANCEL
                </button>
                <button className="px-2 py-1 bg-blue-600 rounded-md cursor-pointer hover:ring-1 hover:ring-red-600 hover:bg-white hover:text-black">
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTask;
