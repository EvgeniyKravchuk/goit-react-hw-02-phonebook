import { Input, Undertitle } from "./GetComponents.jsx";

export default function GetFinder({ setFilter }) {
  return (
    <>
      <Undertitle>Поиск контакта по имени: </Undertitle>
      <Input placeholder="Введите имя" onChange={setFilter} />
    </>
  );
}
