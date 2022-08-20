import React, { useContext, useEffect, useState } from "react";
import CardTodo from "../component/CardTodo";
import Layuot from "../component/Layuot";
import { useParams } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import CreateTask from "../modal/CreateTask";

const Detail = () => {
  const { id } = useParams();
  const { currentTodoItem, getAllTodoItem } = useContext(TodoContext);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAllTodoItem(id);
  }, []);
  return (
    <Layuot>
      <div className="flex flex-col text-center">
        <span className="mt-10 font-bold text-4xl mb-5">List Todo</span>
        <div>
          <button
            className="px-3 py-2 font-bold text-white bg-blue-500 rounded-md mb-6 "
            onClick={() => setOpen(!open)}
          >
            Create Todo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 px-4 max-w-[1200px] mx-auto gap-4">
        {currentTodoItem.map((item) => {
          return (
            <CardTodo
              name={item.name}
              status={item.itemCompletionStatus}
              id={id}
              itemId={item.id}
            />
          );
        })}
      </div>
      <CreateTask open={open} setOpen={setOpen} id={id}></CreateTask>
    </Layuot>
  );
};

export default Detail;
