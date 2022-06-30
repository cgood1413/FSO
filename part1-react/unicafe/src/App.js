import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalCount = good + neutral + bad;

  const handleClick = (state, setter) => () => {
    setter(state + 1);
  }

  const getAverage = () => {
    const totalScore = ((good * 1) + (bad * -1));
    return totalScore / totalCount;
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={handleClick(good, setGood)}/>
      <Button text="neutral" onClick={handleClick(neutral, setNeutral)} />
      <Button text="bad" onClick={handleClick(bad, setBad)}/>
      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p><strong>All: {totalCount}</strong></p>
      <p><strong>Average: {getAverage() || 0}</strong></p>
      <p><strong>Positive: {good / totalCount || 0}%</strong></p>
    </div>
  )
}

export default App