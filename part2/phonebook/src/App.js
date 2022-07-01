import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "555-867-5309" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  // const [showAll, setShowAll] = useState(true);

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

  // const handleFilterChange = (event) => {
  //   setShowAll(false);
  //   const filterRegExp = new RegExp(event.target.value, 'i')
  //   const filteredPersons = persons.filter(person => {
  //     return filterRegExp.test(person.name);
  //   })
  //   setPersons(filteredPersons);
  // }



  return (
    <div>
      <h1>Phonebook</h1>
      {/* <h2>Filter Contacts</h2>
      <input onChange={handleFilterChange} /> */}
      <h2>Add Contact</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          number: <input type="tel" onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {persons.map((person) => (
        <p>{person.name}: {person.number}</p>
      ))}
    </div>
  );
};

export default App;
