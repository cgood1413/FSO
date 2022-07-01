import { useState } from "react";

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}:</td> <td>{props.value}</td>
  </tr>
);

const Statistics = (props) => (
  <table>
    <StatisticLine text={"Good"} value={props.good} />
    <StatisticLine text={"Neutral"} value={props.neutral} />
    <StatisticLine text={"Bad"} value={props.bad} />
    <StatisticLine text={"Total"} value={props.total} />
    <StatisticLine text={"Average"} value={props.average} />
    <StatisticLine text={"Positive"} value={props.positive} />
  </table>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = good * 1 + (bad * -1) / total;
  const positive = (good / total) * 100;

  const handleClick = (state, setter) => () => {
    setter(state + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={handleClick(good, setGood)} />
      <Button text="neutral" onClick={handleClick(neutral, setNeutral)} />
      <Button text="bad" onClick={handleClick(bad, setBad)} />
      <h1>Statistics</h1>
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive}
        />
      ) : (
        <p>No feedback given yet...</p>
      )}
    </div>
  );
};

export default App;
