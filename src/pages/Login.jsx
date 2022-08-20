import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";
import { Input } from "../component/Input";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_URL + "/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.data.token);
        window.alert("sukses login");
        navigate("/");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        className="flex flex-col min-w-[30%] justify-center items-center p-6 gap-2 shadow-xl shadow-slate-200"
        onSubmit={login}
      >
        <span className="font-bold text-2xl">Login</span>
        <Input
          id="input-username"
          type={"text"}
          placeholder={"Username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="input-pass"
          type={"password"}
          placeholder={"***********"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="button-log" label={"SUBMIT"} />
      </form>
    </div>
  );
};

export default Login;
