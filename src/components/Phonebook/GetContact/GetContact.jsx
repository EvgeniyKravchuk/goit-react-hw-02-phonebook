import GetFinder from "./GetFinder.jsx";
import GetList from "./GetList.jsx";
import { Undertitle, Section } from "./GetComponents.jsx";

export default function GetContact({
  filter,
  setFilter,
  del,
  filteredContacts,
}) {
  return (
    <>
      <Undertitle>Список контактов:</Undertitle>
      <Section>
        <GetFinder filter={filter} setFilter={setFilter} />
        <GetList del={del} filteredContacts={filteredContacts} />
      </Section>
    </>
  );
}
