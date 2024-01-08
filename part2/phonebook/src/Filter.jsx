const Filter = (props) => {
  const { searchContact, handleSearchContact } = props

  return (
    <div>
      filter shown with{' '}
      <input type="text" value={searchContact} onChange={handleSearchContact} />
    </div>
  )
}

export default Filter
