import { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import Notiflix from 'notiflix';

import {
  AvatarWrapper,
  InputWrapper,
  Input,
  Label,
  ListItem,
  ListItemForm,
} from './ModalForm.styled';
import Avatar from '../../images/woman.png';
import { Btn } from 'components/Btn/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contactsOperations';
import { getContactsItems } from 'redux/contactsSelectors';
import { notifySettings } from 'utils/notifySettings';

export const ModalForm = ({ id, closeModal }) => {
  const contacts = useSelector(getContactsItems);
  const currentContact = contacts.find(contact => contact.id === id);

  console.log(id);
  const dispatch = useDispatch();

  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const includesName = contacts.find(
      contact => contact.name === name && contact.number === number
    );

    if (includesName) {
      return Notiflix.Notify.warning('No data changed', notifySettings);
    }
    dispatch(updateContact({ id, name, number }));
    closeModal();
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <ListItem>
      <AvatarWrapper>
        <img src={Avatar} alt="avatar" width="48" />
      </AvatarWrapper>
      <ListItemForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>
            New name:
            <Input
              onChange={onInputChange}
              value={name}
              name="name"
              placeholder="Enter contact`s name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </Label>
          <Label>
            New phone:
            <Input
              onChange={onInputChange}
              value={number}
              type="tel"
              name="number"
              placeholder="Enter contact`s number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </Label>
        </InputWrapper>
        <Btn
          icon={FaUserEdit}
          type="submit"
          status="update"
          text="Update contact"
        />
      </ListItemForm>
    </ListItem>
  );
};

ModalForm.propTypes = {
  // src: propTypes.string.isRequired,
  // alt: propTypes.string.isRequired,
  //   closeModal: propTypes.func.isRequired,
};
