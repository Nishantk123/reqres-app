import React, { useState } from "react";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
const SignUp = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate()

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleSignUp = () =>{
        let data = {
            "email":email,
            "password":password
        }

        axios({
            method: "POST",
            url: "https://reqres.in/api/register",
            data: data
        })
        .then(res =>{
            console.log(res.data)
            history("/login")
        })
        .catch(err =>{
            console.log(err)
        })

    }
    return(
        <div className="login-container">
            
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <div className="card my-5 bg-info">
                            <div className="card-body">
                                <h2 className="text-center">Sign up</h2>
                                <input className="form-control my-3" placeholder="Enter your name"  onChange={(e)=> handleName(e)}/>
                                <input className="form-control my-3" placeholder="Enter your email" onChange={(e)=> handleEmail(e)}/>
                                <input type="password" className="form-control my-3" placeholder="Enter your password" onChange={(e)=> handlePassword(e)}/>
                                <div className="text-center">
                                    <button className="btn btn-warning" onClick={handleSignUp}>Signup</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUp;