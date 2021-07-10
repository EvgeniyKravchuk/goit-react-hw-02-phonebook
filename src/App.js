import { Component } from "react";
import GetContact from "./components/Phonebook/GetContact/GetContact.jsx";
import AddContact from "./components/Phonebook/AddContact/AddContact.jsx";
import {
  Wrapper,
  Title,
} from "./components/Phonebook/AddContact/AddComponents.styled.jsx";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  setNameValue = ({ currentTarget }) => {
    this.setState({ name: currentTarget.value });
  };

  setNumberValue = ({ currentTarget }) => {
    this.setState({ number: currentTarget.value });
  };

  setFilterValue = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  deleteContact = ({ currentTarget }) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== currentTarget.id
    );

    this.setState({ contacts: newContacts });
  };

  clear = () => {
    this.setState({ name: "", number: "" });
  };

  addContact = () => {
    if (this.state.name !== "" && this.state.number !== "") {
      this.setState((prevState) => ({
        contacts: [
          ...prevState.contacts,
          {
            id: this.state.number,
            name: this.state.name,
            number: this.state.number,
          },
        ],
      }));
      this.clear();
    }
  };

  render() {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <Wrapper>
        <Title>Телефонная книга:</Title>
        <AddContact
          getName={this.setNameValue}
          getNumber={this.setNumberValue}
          add={this.addContact}
          name={this.state.name}
          number={this.state.number}
        />
        <GetContact
          filter={this.state.filter}
          setFilter={this.setFilterValue}
          del={this.deleteContact}
          filteredContacts={filteredContacts}
        />
      </Wrapper>
    );
  }
}

export default App;
