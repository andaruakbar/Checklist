import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [currentTodoItem, setCurrentTodoItem] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/checklist", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setTodoList(res.data.data);
      });
  }, []);

  const getAllTodoItem = (id) => {
    axios
      .get(process.env.REACT_APP_BASE_URL + `/checklist/${id}/item`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setCurrentTodoItem(res.data.data));
  };

  const handleAddTodo = ({ name }) => {
    axios
      .post(
        process.env.REACT_APP_BASE_URL + "/checklist",
        { name },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => window.alert("sukses menambahkan"));
  };

  const handleAddTodoItem = ({ itemName, id }) => {
    axios
      .post(
        process.env.REACT_APP_BASE_URL + `/checklist/${id}/item`,
        { itemName },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => window.alert("sukses menambahkan"));
  };

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(process.env.REACT_APP_BASE_URL + `/checklist/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(() => window.alert("sukses dihapus"))
      .catch(() =>
        window.alert("gagal dihapus karena ada task yang belum selesai")
      );
  };

  const handleDeleteItem = (id, itemId) => {
    axios
      .delete(
        process.env.REACT_APP_BASE_URL + `/checklist/${id}/item/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => window.alert("sukses dihapus"));
  };

  const handleUpdate = ({ id, itemId, name }) => {
    axios
      .put(
        process.env.REACT_APP_BASE_URL +
          `/checklist/${id}/item/rename/${itemId}`,
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => window.alert("sukses update task"));
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        getAllTodoItem,
        currentTodoItem,
        handleAddTodo,
        handleAddTodoItem,
        handleDelete,
        handleDeleteItem,
        handleUpdate,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
