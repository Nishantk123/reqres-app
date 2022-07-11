import React from "react";
import axios from "axios";

const DeleteModal = ({handleCloseModal, id}) =>{
    
    const handleUserDelete = () =>{
        axios.delete("https://reqres.in/api/users/"+id)
        .then(res=>{
            handleCloseModal()
            alert("user deleted successful")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div className="modal d-block" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Delete User</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCloseModal}
              ></button>
            </div>
            <div className="modal-body">
                <h3>Are you sure want to delete?</h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCloseModal}
              >
                No
              </button>
              <button type="button" className="btn btn-primary" onClick={handleUserDelete}>
                Yes 
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}


export default DeleteModal;