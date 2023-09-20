import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modelbox from "./Modelbox";

const Dashboard = () => {
  const [modelHide , setModelHide] = useState(false)
  const user = sessionStorage.getItem("user");
  const userId= sessionStorage.getItem("id")
  const [data, setData] = useState([]);
  const url = "https://64e3a5afbac46e480e790d42.mockapi.io/users"+"/"+ userId;
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data);

    });
  }, []);
  
 const handleDelete = (e) => {
   axios.delete(url+"/"+ e).then( response=>{
    console.log(`delete success ${e}`)
    window.location.reload()
   })
   
 }



  return (
    <>
      <div>
        <h1>dashboard</h1>

        <div>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=> setModelHide(true)}>popup</button>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">username</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Add</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            {/* {data.map((item) => (
              
                
                    <tbody>
              <tr>
                <th scope="row" key={item.id}>
                  {item.id}
                </th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td><button className="btn btn-success">Edit</button></td>
                <td><button className="btn btn-danger" onClick={(e)=>handleDelete(item.id)}>Delete {item.id}</button></td>
              </tr>
            </tbody>
                )
            )} */}
          </table>
        </div>
      </div>
      


      <div
        class="modal fade"
        id="exampleModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
