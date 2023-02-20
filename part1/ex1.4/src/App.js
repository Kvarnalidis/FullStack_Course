const Header =(props)=>{
return (
  <div>
    <h1>
      {props.course}
    </h1>
  </div>

)
}
const Parts=(part)=>{
  return(
    <p>
      {part.parts.name} {part.parts.exercises}
    </p>
  )
}
const Content =(props)=>{
  return (
    <div>
    <Parts parts={props.parts[0]}/>
    <Parts parts={props.parts[1]}/>
    <Parts parts={props.parts[2]}/>
    </div>
  )
  }
const Total=(total)=>{
  return(

    <div>
      <p>
      Number of exercises {total.parts[0].exercises+total.parts[1].exercises+total.parts[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course ="Half Stack application development"

  const parts= [
  {
    name:"Fundamentals of React",
    exercises: 10
  },
  {
    name:"Using props to pass data",
    exercises: 7
  },
  {
    name:"State of a component",
    exercises:14
  }
  ]

  return(
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}
export default App
