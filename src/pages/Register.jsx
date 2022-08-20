import React, { useState } from "react";
import Button from "../component/Button";
import { Input } from "../component/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegister = (e) => {
    e.preventDefault();
    axios
      .post(process.env.REACT_APP_BASE_URL + "/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        window.alert("sukses register");
        navigate("/login");
      });
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <form
        className="flex flex-col min-w-[30%] justify-center items-center p-6 gap-2 shadow-xl shadow-slate-200"
        onSubmit={submitRegister}
      >
        <span className="font-bold text-2xl">Create Account</span>
        <Input
          id="input-username"
          type={"username"}
          placeholder={"Username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="input-email"
          type={"email"}
          placeholder={"example@gmail.com"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="input-pass"
          type={"password"}
          placeholder={"***********"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="button-log" label={"SUBMIT"}></Button>
      </form>
    </div>
  );
};

export default Register;
