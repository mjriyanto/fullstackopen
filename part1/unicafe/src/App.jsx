import { useState } from 'react'

const Button = (props) => {
  const { handleClick, text } = props

  return <button onClick={handleClick}>{text}</button>
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const total = good + neutral + bad
  const average = (good - bad) / total || 0
  const positives = `${(good / total) * 100 || 0}%`

  if (!good && !neutral && !bad) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positives} />
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = (props) => {
  const { text, value } = props

  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => {
    setGood(good + 1)
  }
  const handleSetNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleSetBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleSetGood} text="good" />
      <Button handleClick={handleSetNeutral} text="neutral" />
      <Button handleClick={handleSetBad} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
