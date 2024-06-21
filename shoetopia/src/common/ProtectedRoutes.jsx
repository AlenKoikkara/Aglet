import React from 'react'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const user = useSelector(selectUser);
  return user ? <Outlet/> : <Navigate to="/"/>
}

export default ProtectedRoutes