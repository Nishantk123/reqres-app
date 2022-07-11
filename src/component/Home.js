import React, { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import Header from "./Header";
const Home = () =>{
    const history = useNavigate()

    useEffect(()=>{
    //  const token = window.localStorage.getItem("token")
    //  console.log(token)
    //  if(token == null){
    //     history("/login")
    //  }
    },[])

    return(
        <div>
            <Header />
            <h3 className="text-center my-3">home page</h3>
        </div>
    )
}

export default Home;