import { useState } from 'react'

const History = ({ total, allClicks }) => {
  if (!total) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <>
      <div>
        button press history: {allClicks.join(' ')}
      </div>
      <p>Total clicks: {total}</p>
    </>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeftClick = left + 1
    setLeft(updatedLeftClick)
    setTotal(updatedLeftClick + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRightClick = right + 1
    setRight(updatedRightClick)
    setTotal(updatedRightClick + left)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History total={total} allClicks={allClicks} />
    </div>
  )
}

export default App
