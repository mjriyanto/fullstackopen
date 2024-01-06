import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVote = () => {
    setVotes(votes.map((vote, index) => (index === selected ? vote + 1 : vote)))
  }

  const displayedVotes = votes[selected]
  const displayedAnecdote = anecdotes[selected]

  const mostFavVotes = Math.max(...votes)
  const mostFavAnecdote =
    anecdotes[votes.findIndex((vote) => vote === mostFavVotes)]

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{displayedAnecdote}</p>
      <p>has {displayedVotes} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{mostFavAnecdote}</p>
      <p>has {mostFavVotes} votes</p>
    </>
  )
}

export default App
