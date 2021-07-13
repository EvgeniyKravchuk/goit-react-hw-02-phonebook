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

  render() {
    return (
      <Wrapper>
        <Title>Телефонная книга:</Title>
        <ContactForm />
        <ContactsList contacts={this.state.contacts} />
      </Wrapper>
    );
  }
}
