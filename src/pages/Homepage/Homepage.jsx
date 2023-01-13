import { useSelector } from 'react-redux';

import {
  HomeMain,
  ImgWrapperUnlogged,
  ImgWrapper,
  HomeTitle,
  Container,
  ContainerUnlogged,
  HomeTitleUnlogged,
} from './Homepage.styled';
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
        <ContainerUnlogged>
          <ImgWrapperUnlogged>
            <img alt="animation" width="100%" srcSet={Animation2} />
          </ImgWrapperUnlogged>
          <HomeTitleUnlogged>
            Welcome to <PhonebookLogo /> ! <br />
            Keep your contacts well organized!
          </HomeTitleUnlogged>
        </ContainerUnlogged>
      )}
    </HomeMain>
  );
};

export default Homepage;
