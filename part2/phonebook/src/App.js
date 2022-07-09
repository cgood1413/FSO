import { useState, useEffect } from "react";
import contacts from "./services/contacts";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Notification from "./Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notifcation, setNotification] = useState(null);

  useEffect(() => {
    contacts.getAll().then(({ data }) => {
      setPersons(data);
    });
  }, []);

  // This can definitely be cleaned up
  const addContact = (event) => {
    event.preventDefault();
    const foundPerson = persons.find((person) => {
      let regex = new RegExp(`/^${newName}/`, "i");
      return regex.test(person.name);
    });
    if (
      foundPerson &&
      window.confirm(
        `${foundPerson.name} already exists in your contacts. Would you like to update their number?`
      )
    ) {
      const updatedContact = { ...foundPerson, number: newNumber };
      contacts.update(foundPerson.id, updatedContact).then(({ data }) => {
        setPersons(
          persons.map((person) =>
            person.id === foundPerson.id ? data : person
          )
        );
        setNotification(`Contact ${data.name} successfully updated`);
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    } else if (!foundPerson) {
      const newContact = { name: newName, number: newNumber };
      contacts
        .create(newContact)
        .then(({ data }) => {
          setPersons(persons.concat(data));
          setNewName("");
          setNewNumber("");
          setNotification(
            `Contact ${data.name} successfully added to contacts`
          );
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch((err) => {
          setNotification(err.response.data.error);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    }
  };

  const deleteContact = (id) => {
    if (window.confirm("Permanently delete this contact?")) {
      contacts.remove(id).then((response) => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSearchTerm(event.target.value);
    setFilteredPersons(
      persons.filter((person) => {
        let regex = new RegExp(searchTerm, "i");
        return regex.test(person.name);
      })
    );
  };

  return (
    <div>
      <Notification message={notifcation} />
      <h2>Phonebook</h2>

      <h3>Filter Contacts</h3>
      <Filter onChange={handleFilterChange} searchTerm={searchTerm} />

      <h3>Add Contact</h3>

      <ContactForm
        name={newName}
        number={newNumber}
        onSubmit={addContact}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h3>Contacts</h3>

      <Contacts
        contacts={filteredPersons.length ? filteredPersons : persons}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
