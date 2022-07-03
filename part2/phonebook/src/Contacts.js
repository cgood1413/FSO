const Contacts = ({ contacts }) => {
  return contacts.map((contact) => (
    <p key={contact.id}>
      {contact.name}: {contact.number}
    </p>
  ));
};

export default Contacts
