import React, { Component } from "react";
import "./App.module.css";
import { Wrapper, Title } from "./components/General.styled";
import ContactForm from "./components/contactForm/ContactForm";
import ContactsList from "./components/contactsList/ContactsList";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteContact = (evt) => {
    const contactForDelete = this.state.contacts.findIndex(
      (contact) => contact.id === evt.currentTarget.id
    );
    const newContacts = this.state.contacts;

    newContacts.splice(contactForDelete, 1);

    this.setState({
      contacts: newContacts,
    });
  };

  render() {
    return (
      <Wrapper>
        <Title>Телефонная книга:</Title>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <ContactsList
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
