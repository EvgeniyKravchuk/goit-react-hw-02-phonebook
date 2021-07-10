import PropTypes from "prop-types";
import GetFinder from "./GetFinder.jsx";
import GetList from "./GetList.jsx";
import { Undertitle, Section } from "./GetComponents.styled.jsx";

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

GetContact.propTypes = {
  del: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filteredContacts: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};
