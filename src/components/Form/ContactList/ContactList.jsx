import styles from './contact-list.module.css';

const ContactList = ({ removeContact, contacts }) => {
  const elements = contacts.map(contact => (
    <li key={contact.id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => removeContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};

export default ContactList;
