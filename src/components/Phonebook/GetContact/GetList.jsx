import { Undertitle, List, Item, Button } from "./GetComponents.jsx";

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
