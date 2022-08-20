import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TodoContext } from "../context/TodoContext";
import Button from "./Button";

const CardFront = (props) => {
  const { handleDelete } = useContext(TodoContext);

  return (
    <div className=" bg-sky-500 py-4 px-4">
      <Link to={`/detail/${props.id}`}>
        <span className="text-xl font-bold text-white">{props.name}</span>
      </Link>
      <div className="flex justify-end mt-2">
        <Button
          label={<FaTrash />}
          padding={6}
          textColor={"red"}
          onClick={() => handleDelete(props.id)}
        />
      </div>
    </div>
  );
};

export default CardFront;
