import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { SessionContext } from '../../context/SessionContext'; 

export const PrivateRoute = () => {
  const session = useContext(SessionContext);
  return session ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
