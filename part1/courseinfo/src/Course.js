const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part }) => (
  <p>
    {part.name}: {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part, i) => {
      return <Part key={part.id} part={part} />;
    })}
  </div>
);

const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises);
    const total = exercises.reduce((prev, curr) => prev + curr);
    return (
    <p>
      Total exercises: {total}
    </p>
  )};

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);

export default Course;
