import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import List from "./List";
import CustomModal from "./CustomModal";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

const User = () =>{

    const [user_list, setUser] = useState([])
    const [show, setShow] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState({})
    const [isEdit, setEdit] = useState(false)
    const history = useNavigate()

    useEffect(()=>{
        const token = window.localStorage.getItem("token")
        if(token == null){
            history('/login')
        }
    },[])


    useEffect(()=>{
        getUserList()
    },[])


    const getUserList = () =>{
        axios.get("https://reqres.in/api/users")
        .then(res=>{
            // console.log(res.data)
            if(res.data){
                setUser(res.data.data)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
    // console.log(user_list);
    const handleModal = () =>{
        setShow(true)
    }
    const handleDeleteModal = (data) =>{
        console.log(data)
        setDeleteModal(true)
        setSelectedUser(data)
    }
    const handleCloseModal = () =>{
        setShow(false)
        setDeleteModal(false)
        setEdit(false)
    }
    const handleEdit = (data) =>{
        setSelectedUser(data)
        setEdit(true)
    }
    console.log(selectedUser)
    return(
        <div className="">
            <Header />
            <div className="container my-3">
                <div className="d-flex justify-content-end my-3">
                        <button className="btn btn-warning" onClick={handleModal}>Create New User</button>
                </div>
                {
                    user_list.map((data, index)=>{
                        // console.log(data, index)
                        return(
                            <div>
                                <List  data = {data} handleDeleteModal={handleDeleteModal} handleEdit ={handleEdit}  />
                            </div>
                        )
                    })
                }
            </div>
            {show&&<CustomModal handleCloseModal={handleCloseModal} />}
            {deleteModal&&<DeleteModal handleCloseModal={handleCloseModal} id = {selectedUser.id}  />}
            {isEdit&&<EditModal data={selectedUser} handleCloseModal={handleCloseModal} />}
        </div>
    )
}


export default User;