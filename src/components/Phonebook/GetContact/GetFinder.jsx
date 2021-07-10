import PropTypes from "prop-types";
import { Input, Undertitle } from "./GetComponents.styled.jsx";

export default function GetFinder({ setFilter }) {
  return (
    <>
      <Undertitle>Поиск контакта по имени: </Undertitle>
      <Input placeholder="Введите имя" onChange={setFilter} />
    </>
  );
}

GetFinder.propTypes = {
  setFilter: PropTypes.func.isRequired,
};
