import { useSelector } from 'react-redux';
import { getLogStatus } from 'redux/authSelectors';
import { HomepageLink, LinkIcon, LinkText } from './Navigation.styled';
import { FcHome, FcContacts } from 'react-icons/fc';

export const Navigation = () => {
  const isLoggedIn = useSelector(getLogStatus);
  return (
    <>
      <HomepageLink to="/">
        <LinkIcon>
          <FcHome />
        </LinkIcon>
        <LinkText>Homepage</LinkText>
      </HomepageLink>
      {isLoggedIn && (
        <HomepageLink to="/contacts">
          <LinkIcon>
            <FcContacts />
          </LinkIcon>
          <LinkText>Contacts</LinkText>
        </HomepageLink>
      )}
    </>
  );
};
