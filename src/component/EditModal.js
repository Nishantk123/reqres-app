import axios from "axios";
import React, { useEffect, useState } from "react";

const EditModal = ({data, handleCloseModal}) => {
    const [name, setName] = useState("mayank")
    const [job, setJob] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleJob = (e) =>{
        setJob(e.target.value)
    }
    const handleSubmit= () =>{

        let user_data = {
            "name": name,
            "job": job
        }

        axios({
            method:"PUT",
            url : "https://reqres.in/api/users/"+ data.id,
            data : user_data
        })
        .then(res =>{
            alert("user updated successfully")
            handleCloseModal()
        })
        .catch(err =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        console.log(data)
        let name = data.first_name + " " +data.last_name
        setName(name)
    },[])



    
  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit  User</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control my-3"
              placeholder="Enter your name"
              onChange={(e) => handleName(e)}
              value={name}
            />
            <input
              className="form-control my-3"
              placeholder="Enter your job"
              onChange={(e) => handleJob(e)}
              value={job}
            />
            {/* <div>
                    <button className="btn btn-info">Submit</button>
                </div> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleCloseModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
