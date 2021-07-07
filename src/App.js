import { Component } from "react";
import {
  Wrapper,
  Title,
} from "./components/Phonebook/AddContact/AddComponents.jsx";
import AddContact from "./components/Phonebook/AddContact/AddContact.jsx";

class App extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Title>Телефонная книга:</Title>
        <AddContact></AddContact>
      </Wrapper>
    );
  }
}

export default App;
