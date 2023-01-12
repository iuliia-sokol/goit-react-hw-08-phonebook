import { useSelector } from 'react-redux';

import { HomeMain, ImgWrapper, HomeTitle, Container } from './Homepage.styled';
import { getLogStatus, getUserName } from 'redux/authSelectors';
import Animation from '../../images/people.gif';
import Animation2 from '../../images/app.gif';
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
            Hey, <span>{name}</span>, let's check your <PhonebookLogo /> !{' '}
            <br />
            Here we go!
          </HomeTitle>
        </Container>
      ) : (
        <Container>
          <ImgWrapper>
            <img alt="animation" width="100%" srcSet={Animation2} />
          </ImgWrapper>
          <HomeTitle>
            Welcome to <PhonebookLogo /> ! <br />
            Keep your contacts well organized!
          </HomeTitle>
        </Container>
      )}
    </HomeMain>
  );
};

export default Homepage;
