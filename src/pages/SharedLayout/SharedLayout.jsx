import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Container, Header } from './SharedLayout.styled';
import { Loader } from '../../components/Loader/Loader';
import { Navigation } from 'components/Navigation/Navigation';
import { UserLogoutMenu } from 'components/UserLogoutMenu/UserLogoutMenu';
import { UserLoginMenu } from 'components/UserLoginMenu/UserLoginMenu';
import { getLogStatus } from 'redux/authSelectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getLogStatus);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserLogoutMenu /> : <UserLoginMenu />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
