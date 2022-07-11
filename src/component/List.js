import React from "react";
import { useNavigate } from "react-router-dom";

const List = ({ data, handleDeleteModal, handleEdit }) => {
  //   console.log(data);
  const history = useNavigate();

  const handleUserDetailRoute = () => {
    history("/user/" + data.id);
  };
  return (
    <div
      className="bg-info d-flex justify-content-between p-3 my-3 list"
      
    >
      <div>{data.id}</div>
      <div className="img-container">
        <img src={data.avatar} className="user-img" />
      </div>
      <div onClick={handleUserDetailRoute} className="text-primary">{data.first_name + data.last_name}</div>
      <div>{data.email}</div>
      <div>
        <img  src ="https://cdn-icons-png.flaticon.com/512/181/181540.png" className="edit-icon"   onClick={()=>handleEdit(data)}/>
        <img src="https://cdn-icons.flaticon.com/png/512/3687/premium/3687412.png?token=exp=1657161261~hmac=49faab58af1ed24b36471527888722d3"  className="delete-icon" onClick={()=>handleDeleteModal(data)}/>
      </div>
    </div>
  );
};
export default List;
