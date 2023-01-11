import { useSelector } from 'react-redux';

import { HomeMain, ImgWrapper, HomeTitle, Container } from './Homepage.styled';
import { getLogStatus, getUserName } from 'redux/authSelectors';
import Animation from '../../images/people.gif';
import { PhonebookLogo } from 'components/Logo/Logo';
const Homepage = () => {
  const isLoggedIn = useSelector(getLogStatus);
  const name = useSelector(getUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <Container>
          <ImgWrapper>
            <img alt="animation" width="100%" srcSet={Animation} />
          </ImgWrapper>
          <HomeTitle>
            <PhonebookLogo /> welcomes you, <span>{name}</span>! <br />
            Here we go!
          </HomeTitle>
        </Container>
      ) : (
        <>
          <HomeTitle>Welcome to Phonebook!</HomeTitle>
        </>
      )}
    </HomeMain>
  );
};

export default Homepage;
