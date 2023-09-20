import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const url = "https://64e3a5afbac46e480e790d42.mockapi.io/users"

  const dt = new Date()
  const Datetime =dt.getMonth() +"-"+ dt.getDay() +"-"+ dt.getFullYear() 
  const navigate = useNavigate();
  const  submitForm  = async (e) => {
    e.preventDefault();
    if(uname !== "" && email !== "" && password !== ""){
      if(password.length >= 8){
        const response = await axios.get(url);
      const users = response.data;
      const user = users.find(u => u.email === email );
      
    
      if( !user){
        axios.post(url,{username:uname , email:email , password:password , date:Datetime

        }).then((response)=>{
         alert("data Submit")
         navigate('/login')
        }) 
      }else{
        alert("Email already Exist")
      }

      }else{
        alert("Password must be 8 caracter")
      }
      
      
    }else{
      console.log("Please Fill All Feilds")
    }
    
   
  };
  

  return (
    <>
      
      <form action="" onSubmit={submitForm}>
        <div className="m-login-body">
        <div>
        <h1>Signup</h1>
      </div>
          <div className="m-login-box">
            <label htmlFor="uname">Username</label>
            <input
              type="text"
              name="uname"
              id="uname"
              autoComplete="off"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Signup</button>
          
          </div>
        </div>
      </form>
      {/* <div>
        {data.map((Elem) => {
          return (
            <div className="container text-center">
            <div className="Formdata" key={Elem.id}>
              <p>{Elem.uname}</p>
              <p>{Elem.email}</p>
              <p>{Elem.password}</p>
            </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default Signup;
