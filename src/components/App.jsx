import { useSelector } from 'react-redux';
// import { lazy, useEffect } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

import { Container, MainHeader, SubHeader } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const loader = useSelector(state => state.contacts.isLoading);
  return (
    <Container>
      {loader && <Loader />}
      <MainHeader>Phonebook</MainHeader>
      <ContactForm />
      <SubHeader>Contacts</SubHeader>
      <Filter />
      <ContactList />
    </Container>
  );
};
