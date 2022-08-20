import React, { useContext, useState } from "react";
import Button from "./Button";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { TodoContext } from "../context/TodoContext";
import UpdateTask from "../modal/CreateUpdate";

const CardTodo = (props) => {
  const { handleDeleteItem } = useContext(TodoContext);
  const [update, setUpdate] = useState(false);

  return (
    <div className="py-4 px-8 bg-blue-700">
      <div className="flex justify-between items-center text-xl text-white font-bold">
        <span>{props.name}</span>
        <div className="flex gap-8">
          <div>{props.status}</div>
          <Button
            label={<FaPencilAlt />}
            padding={6}
            textColor={"red"}
            onClick={() => setUpdate(true)}
          />
          <Button
            label={<FaTrash />}
            padding={6}
            textColor={"red"}
            onClick={() => handleDeleteItem(props.id, props.itemId)}
          />
        </div>
      </div>
      <UpdateTask
        open={update}
        setOpen={setUpdate}
        id={props.id}
        currentName={props.name}
      ></UpdateTask>
    </div>
  );
};

export default CardTodo;
