import PropTypes from "prop-types";
import { Undertitle, List, Item, Button } from "./GetComponents.styled.jsx";

export default function GetList({ del, filteredContacts }) {
  return (
    <>
      <Undertitle>Список Ваших контактов:</Undertitle>
      <List>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {name + ": " + number}
              <Button id={id} onClick={del}>
                X
              </Button>
            </Item>
          );
        })}
      </List>
      ;
    </>
  );
}

GetList.propTypes = {
  del: PropTypes.func.isRequired,
  filteredContacts: PropTypes.array.isRequired,
};
