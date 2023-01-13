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
          <FcHome size={24} />
        </LinkIcon>
        <LinkText>Homepage</LinkText>
      </HomepageLink>
      {isLoggedIn && (
        <HomepageLink to="/contacts">
          <LinkIcon>
            <FcContacts size={24} />
          </LinkIcon>
          <LinkText>Contacts</LinkText>
        </HomepageLink>
      )}
    </>
  );
};
