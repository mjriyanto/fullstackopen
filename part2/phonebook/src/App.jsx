import { useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [searchContact, setSearchContact] = useState('')
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '021-8806180', id: 1 }
  ])

  const handleSearchContact = (event) => {
    setSearchContact(event.target.value)
  }

  const displayedPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchContact.toLowerCase())
  )

  const handleNameInput = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneInput = (event) => {
    setNewPhone(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName === '' || newPhone === '') {
      alert('All field should be filled')
      return
    }
    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons([
      ...persons,
      { name: newName, phone: newPhone, id: Math.floor(Math.random() * 100) }
    ])
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchContact={searchContact}
        handleSearchContact={handleSearchContact}
      />
      <h2>Add Contact</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        handleNameInput={handleNameInput}
        newPhone={newPhone}
        handlePhoneInput={handlePhoneInput}
      />
      <h2>Numbers</h2>
      <Persons displayedPersons={displayedPersons} />
    </div>
  )
}

export default App
