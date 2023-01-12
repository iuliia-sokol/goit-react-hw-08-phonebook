import PropTypes from 'prop-types';
import { MdPersonRemoveAlt1 } from 'react-icons/md';
import {
  ListItem,
  ListItemData,
  PhoneLink,
  BtnsWrapper,
  AvatarWrapper,
  DataWrapper,
} from './ContactItem.styled';
import { Btn } from '../Btn/Btn';
import Avatar from '../../images/user-icons.gif';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number, onDeleteBtnClick }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ListItem>
      <AvatarWrapper>
        <img src={Avatar} alt={name} width="48" />
      </AvatarWrapper>
      <ListItemData>
        <DataWrapper>
          Name:<span> {name} </span>
        </DataWrapper>
        <DataWrapper>
          Phone:{' '}
          <PhoneLink href={`tel:${number}`}>
            <span>{number}</span>
          </PhoneLink>
        </DataWrapper>
      </ListItemData>
      <BtnsWrapper>
        <Btn
          icon={MdPersonRemoveAlt1}
          type="button"
          status="delete"
          text="Delete contact"
          onClick={() => onDeleteBtnClick(id, name)}
        />
        <Btn
          icon={MdPersonRemoveAlt1}
          type="button"
          status="edit"
          text="Edit contact"
          onClick={() => toggleModal(id)}
        />
      </BtnsWrapper>
      {showModal && <Modal id={id} closeModal={toggleModal} />}
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
};
