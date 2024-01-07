function Header(props) {
  return <h1>{props.title}</h1>
}

function Content(props) {
  return (
    <>
      {props.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
    </>
  )
}

function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

function Total(props) {
  return (
    <p>
      <b>total of {props.total} exercises</b>
    </p>
  )
}

function Course(props) {
  const { course } = props
  const total = course.parts
    .map((part) => part.exercises)
    .reduce((acc, curr) => acc + curr)

  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </>
  )
}

export default Course
