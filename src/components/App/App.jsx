import React from "react";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { Pagetitle } from "./App.styled";

const App = () => {
  return (
    <>
      <Pagetitle>Phonebook</Pagetitle>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
