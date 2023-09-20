import axios from 'axios';
import React, {useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const [ lemail, setLemail]= useState ('');
    const [lpassword , setLpassword] = useState('');
    const [login , setLogin] = useState(false);

    const url = "https://64e3a5afbac46e480e790d42.mockapi.io/users";
    const navigate = useNavigate();

    const handlesubmit= async (e) => {
      e.preventDefault();
      if(lemail !== "" && lpassword !== ""){
      
        const response = await axios.get(url);
        const users = response.data
        const user = users.find(u => u.email === lemail && u.password === lpassword);
        if(user){
          sessionStorage.setItem('user' , user.email);
          sessionStorage.setItem('id' , user.id)
          setLogin(true)
          navigate('/dashboard');
        }else{
          toast.error('Invalid User & Password!', {
            position: toast.POSITION.TOP_CENTER});
        }
      
      }else{
        toast.error('Please fill all feilds', {
          position: toast.POSITION.TOP_CENTER});
        }
      }
    
    
    
   
  return (
    <>

    <div className="m-login-body">
    <div>
        <h1>Login</h1>
      </div>
        <div className='m-login-box'>
            <input type="text" name='userId' id='lemail' placeholder='Email' value={lemail} onChange={(e)=> setLemail(e.target.value)}/>
            <input type="password" name='id' id='lpassword' placeholder='Password' value={lpassword} onChange={(e)=> setLpassword(e.target.value)} />
            <button onClick={handlesubmit}>Login</button>
            <p className="text-center mt-2">or</p>
            <Link className="nav-link active text-center" aria-current="page" to="/signup">Signup</Link>
        </div>
        <ToastContainer />
    </div>
    </>
  )
}

export default Login