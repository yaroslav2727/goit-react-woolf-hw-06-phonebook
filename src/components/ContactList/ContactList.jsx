import { deleteContact, selectContacts, selectFilter } from "store/phonebookSlice";
import { useDispatch, useSelector } from "react-redux";
import Container from "components/Container/Container";
import { List, Item, Button, Contactbox } from "./ContactList.styled";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <List>
        {filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Contactbox>
              {contact.name} - {contact.number}
            </Contactbox>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ContactList;
