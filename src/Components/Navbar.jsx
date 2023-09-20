import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const isAuth = sessionStorage.getItem('user');
  const navigate = useNavigate();

  const Logout=()=>{
    sessionStorage.clear('user')
    window.location.reload();
    navigate('/login')

  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">OLX</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Location
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">karachi</a></li>
            <li><a className="dropdown-item" href="#">islamabad</a></li>
            <li><a className="dropdown-item" href="#">lahore</a></li>
            <li><a className="dropdown-item" href="#">faisalabad</a></li>
            <li><a className="dropdown-item" href="#">pindi</a></li>
            <li><a className="dropdown-item" href="#">quetta</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            All categories
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mobiles</a></li>
            <li><a className="dropdown-item" href="#">Bikes</a></li>
            <li><a className="dropdown-item" href="#">Jobs</a></li>
            <li><a className="dropdown-item" href="#">Vehicle</a></li>
            <li><a className="dropdown-item" href="#">Electronics</a></li>
            <li><a className="dropdown-item" href="#">Properties</a></li>
          </ul>
        </li>
      </ul>
      {
        isAuth ? <p>{isAuth}</p> : ""
      }
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      {
          isAuth ? 
          <Link to="/dashboard"><button className='btn btn-primary' onClick={Logout}>Logout</button></Link>
          :
          <Link to="/login"><button className='btn btn-primary'>Login</button></Link> 
        }
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar