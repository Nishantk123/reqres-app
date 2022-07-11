import React, { useState } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate()

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value)
  };

  const handleLogin = () =>{
    console.log("hello");
    let data = {
        "email":email,
        "password":password
    }
    axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:data
    })
    .then(res=>{
        console.log(res.data)
        if(res.data){
            window.localStorage.setItem("token", res.data.token)
        }
        history("/")
    })
    .catch(err =>{
        console.log(err)
    })
  }

  return (
    <div className="container-fluid login-container">
      <div className="row justify-content-center">
        <div className="col-sm-6 my-5">
          <div className="card bg-info">
            <div className="card-body">
              <h3 className="text-center">Login</h3>
              <input
                className="form-control my-3"
                placeholder="enter your email"
                onChange={(e) => handleEmail(e)}
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="enter your password"
                onChange={(e) => handlePassword(e)}
              />
              <div className="text-center">
                <button className="btn btn-warning" onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
