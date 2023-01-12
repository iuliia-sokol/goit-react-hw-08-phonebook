import { useState } from 'react';

import {
  AvatarWrapper,
  // BtnsWrapper,
  InputWrapper,
  Input,
  Label,
  ListItem,
  ListItemForm,
} from './ModalForm.styled';
import Avatar from '../../images/woman.png';
import { Btn } from 'components/Btn/Btn';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contactsOperations';

export const ModalForm = ({ id }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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

    // const includesName = contacts.find(
    //   contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    // );

    // if (includesName) {
    //   return Notiflix.Notify.warning(
    //     `${name} is already in contacts`,
    //     notifySettings
    //   );
    // }

    dispatch(updateContact({ id, name, number }));
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
            Name:
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
            Phone:
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
          // icon={MdPersonRemoveAlt1}
          type="submit"
          status="save"
          text="Update contact"
        />
      </ListItemForm>
      {/* <BtnsWrapper></BtnsWrapper> */}
    </ListItem>
  );
};

ModalForm.propTypes = {
  // src: propTypes.string.isRequired,
  // alt: propTypes.string.isRequired,
  //   closeModal: propTypes.func.isRequired,
};
