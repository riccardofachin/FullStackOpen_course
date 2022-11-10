import React from 'react';

const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = (props) => {
  const sum = props.parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises,
    0
  );

  return (
    <>
      <Header course={props.course} />
      <Content parts={props.parts} />
      <Total sum={sum} />
    </>
  );
};

export default Course;
