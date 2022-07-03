import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState(" ");

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(({data}) => {
      setPersons(data);
    })
  }, [])

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