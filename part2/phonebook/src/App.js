import { useState } from "react";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState(" ");

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

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredPersons(persons.filter(person => {
      let regex = new RegExp(searchTerm, 'i');
      return regex.test(person.name);
    }))
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <h3>Filter Contacts</h3>
      <Filter onChange={handleFilterChange} searchTerm={searchTerm} />

      <h3>Add Contact</h3>

      <ContactForm
      name={newName}
      number={newNumber}
      onSubmit={addPerson}
      onNameChange={handleNameChange}
      onNumberChange={handleNumberChange}
      />

      <h3>Contacts</h3>

      <Contacts contacts={filteredPersons.length ? filteredPersons: persons} />
    </div>
  )
}

export default App;