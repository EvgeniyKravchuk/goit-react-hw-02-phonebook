import { Input, Button, Section, Undertitle } from "./AddComponents.jsx";

export default function AddContact(props) {
  return (
    <Section>
      <Undertitle>Имя:</Undertitle>
      <Input
        type="text"
        name="name"
        placeholder="Введите имя"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <Button>Добавить</Button>
    </Section>
  );
}
