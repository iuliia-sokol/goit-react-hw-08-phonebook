import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogStatus } from 'redux/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getLogStatus);

  return isLoggedIn ? children : <Navigate to="/" />;
};
