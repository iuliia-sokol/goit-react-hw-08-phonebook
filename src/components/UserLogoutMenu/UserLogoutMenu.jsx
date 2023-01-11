import { useDispatch, useSelector } from 'react-redux';

import { LogoutBtn, WelcomeText } from './UserLogoutMenu.styled';
import { logoutUser } from '../../redux/authOperations';
import { getUserName } from 'redux/authSelectors';

export const UserLogoutMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <WelcomeText> Welcome back, {name}</WelcomeText>
      <LogoutBtn type="button" onClick={() => dispatch(logoutUser())}>
        Log out
      </LogoutBtn>
    </div>
  );
};
