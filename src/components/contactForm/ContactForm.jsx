import React, { Component } from "react";
import { Input, Label, Button, Form } from "./ContactForm.styled";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { name } = evt.target;

    this.setState({ [name]: evt.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form>
        <Label>
          Имя:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Введите имя"
            onChange={this.handleChange}
            value={name}
          />
        </Label>
        <Label>
          Номер:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="Введите номер телефона"
            onChange={this.handleChange}
            value={number}
          />
        </Label>
        <Button type="submit">Подтвердить</Button>
      </Form>
    );
  }
}
