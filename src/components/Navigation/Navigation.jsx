import { NavLink } from 'components/NavLink/NavLink';
import { useSelector } from 'react-redux';
import { getLogStatus } from 'redux/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getLogStatus);
  return (
    <>
      <NavLink to="/" text="Homepage" />
      {isLoggedIn && <NavLink to="/contacts" text="Contacts" />}
    </>
  );
};
