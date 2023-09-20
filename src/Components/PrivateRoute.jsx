import { Outlet, Navigate} from "react-router-dom";

import React from 'react'

const PrivateRoute = () => {
    let user = sessionStorage.getItem('user')
  return (
    user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute