const Persons = (props) => {
  return (
    <>
      {props.displayedPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.phone}
        </p>
      ))}
    </>
  )
}

export default Persons
