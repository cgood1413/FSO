import { useState } from "react";

const ContactForm = ({name, number, addPerson, onNameChange, onNumberChange}) => {
 return ( <form onSubmit={addPerson}>
    <div>
      name: <input onChange={onNameChange} value={name} />
      number:{" "}
      <input type="tel" onChange={onNumberChange} value={number} />
    </div>
    <div>
      <button type="submit">Add Person</button>
    </div>
  </form>);
};

const Contacts = ({contacts}) => {
  return (contacts.map(contact => (
    <p key={contact.id}>{contact.name}: {contact.number}</p>
  )))
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const hasPerson = persons.some((person) => {
      return person.name === newName;
    });
    if (hasPerson) {
      alert(`${newName} is already added to the phonebook!`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons(persons.concat(newPerson));
      setNewName("");
      setNewNumber("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Add Contact</h3>

      <ContactForm
      name={newName}
      number={newNumber}
      onSubmit={addPerson}
      onNameChange={handleNameChange}
      onNumberChange={handleNumberChange}
      />

      <h3>Contacts</h3>

      <Contacts contacts={persons} />
    </div>
  )
}

export default App;