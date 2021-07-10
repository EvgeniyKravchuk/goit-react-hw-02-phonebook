import PropTypes from "prop-types";
import { Input, Button, Section, Undertitle } from "./AddComponents.styled.jsx";

export default function AddContact({ getName, getNumber, add, name, number }) {
  return (
    <Section>
      <div>
        <Undertitle>Имя контакта:</Undertitle>
        <Input
          type="text"
          name="name"
          placeholder="Введите имя"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={getName}
        />
      </div>
      <div>
        <Undertitle>Номер телефона:</Undertitle>
        <Input
          type="tel"
          name="number"
          placeholder="Введите номер телефона"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={getNumber}
        />
      </div>
      <Button onClick={add}>Добавить</Button>
    </Section>
  );
}

AddContact.propTypes = {
  add: PropTypes.func.isRequired,
  getName: PropTypes.func.isRequired,
  getNumber: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};