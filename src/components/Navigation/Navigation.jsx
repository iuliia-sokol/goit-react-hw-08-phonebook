import { NavLink } from 'components/NavLink/NavLink';
import { useSelector } from 'react-redux';
import { getLogStatus } from 'redux/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(getLogStatus);
  return (
    <nav>
      <NavLink to="/" text="Homepage" />
      {isLoggedIn && <NavLink to="/contacts" text="Contacts" />}
    </nav>
  );
};
