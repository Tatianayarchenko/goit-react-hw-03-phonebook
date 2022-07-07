import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ContactsText } from './Contacts.styled';
import { Button } from '../UI/Common.styled';

export const Contacts = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactsItem key={id}>
        <ContactsText>{name}</ContactsText>
        <ContactsText>{number}</ContactsText>
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </ContactsItem>
    ))}
  </ContactsList>
);

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
