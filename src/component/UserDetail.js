import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const UserDetail = () =>{

    const history = useNavigate()
    const params = useParams()
    console.log(params)
    const user_id = params.id;
    const [user_detail, setUserDetail] = useState({})
    useEffect(()=>{
        getUserDatails()
    },[])

    const getUserDatails = () =>{
        axios.get("https://reqres.in/api/users/"+user_id)
        .then(res =>{
            console.log(res.data)
            if (res.data){
                setUserDetail(res.data.data)
            }
        })
        .catch(err =>{
            console.log(err)
            alert("user not present")
        })
    }
    console.log(user_detail)
    return(
        <div>
            <Header />
            <div className="container my-3">
                <div className="card w-50 mx-auto bg-warning">
                    <div className="card-body text-center">
                        <h3>User Details</h3>
                        <img src ={user_detail.avatar} />
                        <div>Id: {user_detail.id}</div>
                        <div>Name: {user_detail.first_name + user_detail.last_name}</div>
                        <div>Email: {user_detail.email}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;