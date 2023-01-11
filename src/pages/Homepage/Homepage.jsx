import { useSelector } from 'react-redux';

import { HomeMain, HomeTitle } from './Homepage.styled';
import { getLogStatus, getUserName } from 'redux/selectors';

const Homepage = () => {
  const isLoggedIn = useSelector(getLogStatus);
  const name = useSelector(getUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <>
          <HomeTitle>Welcome to your Phonebook, {name}</HomeTitle>
        </>
      ) : (
        <>
          <HomeTitle>Welcome to Phonebook!</HomeTitle>
        </>
      )}
    </HomeMain>
  );
};

export default Homepage;
