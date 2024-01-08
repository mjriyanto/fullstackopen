const PersonForm = (props) => {
  const { handleSubmit, newName, handleNameInput, newPhone, handlePhoneInput } =
    props

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input type="text" value={newName} onChange={handleNameInput} />
      </div>
      <div>
        number:{' '}
        <input type="text" value={newPhone} onChange={handlePhoneInput} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
