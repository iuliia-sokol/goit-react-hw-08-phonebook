import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';
import { getLoadingStatus } from 'redux/authSelectors';
import { Container, SubHeader } from './Contacts.styled';

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
    </Container>
  );
};
export default Contacts;
