import { FaRegTrashAlt } from "react-icons/fa";
import { List, Item, Button } from "./ContaxList.styled";

export default function ContactsList({ contacts }) {
  return (
    <List>
      {contacts.map((contact) => {
        return (
          <Item key={contact.id}>
            {contact.name}: {contact.number}
            <Button>
              <FaRegTrashAlt />
            </Button>
          </Item>
        );
      })}
    </List>
  );
}
