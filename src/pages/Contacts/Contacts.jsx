import ScrollToTop from 'react-scroll-up';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'redux/authSelectors';
import { Container, SubHeader } from './Contacts.styled';
import Arrow from '../../images/arrowUp.png';

export const Contacts = () => {
  const loader = useSelector(getLoadingStatus);
  return (
    <Container>
      {loader && <Loader />}
      <div>
        <SubHeader>Add new contact</SubHeader>
        <ContactForm />
      </div>
      <div>
        <SubHeader>Your contacts</SubHeader>
        <Filter />
        <ContactList />
      </div>
      <ScrollToTop
        showUnder={160}
        style={{
          bottom: 40,
          right: 40,
        }}
      >
        <img alt="arrow up" width="35" srcSet={Arrow} />
      </ScrollToTop>
    </Container>
  );
};
export default Contacts;
