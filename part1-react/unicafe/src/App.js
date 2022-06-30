import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Statistics = (props) => {
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p><strong>All: {props.total}</strong></p>
      <p><strong>Average: {props.average || 0}</strong></p>
      <p><strong>Positive: {props.positive || 0}%</strong></p>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;
  const average = (good * 1) + (bad * -1) / total;
  const positive = (good / total) * 100;

  const handleClick = (state, setter) => () => {
    setter(state + 1);
  }

  // const getAverage = () => {
  //   const totalScore = ((good * 1) + (bad * -1));
  //   return totalScore / totalCount;
  // }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={handleClick(good, setGood)}/>
      <Button text="neutral" onClick={handleClick(neutral, setNeutral)} />
      <Button text="bad" onClick={handleClick(bad, setBad)}/>
      <h1>Statistics</h1>
      {total 
      ? <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/> 
      : <p>No feedback given yet...</p>}
    </div>
  )
}

export default App