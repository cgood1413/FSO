const Contacts = ({ contacts, deleteContact }) => {
  return contacts.map((contact) => (
    <p key={contact.id}>
      {contact.name}: {contact.number}
    <span><button onClick={() => deleteContact(contact.id)}>Delete Contact</button></span></p>
  ));
};

export default Contacts
