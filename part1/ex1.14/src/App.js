import { useState } from 'react'
const Button =({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const Vote=({points})=>{
  return(
    <div>
      has {points} votes
    </div>
  )
}
const Most=({anecdotes,votes})=>{
  console.log(Math.max(...votes))
  for (let i=0;i<votes.length;i++){
    if (votes[i]===Math.max(...votes)){
      return(
        <div>
          <h1> Anecdote with most votes</h1>
          {anecdotes[i]} 
          has {votes[i]} votes
        </div>
      )
    }
  }
  
}
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
  const[votes,setVotes]=useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const handleAnecdoteClick =()=>{
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }
  const handleVoteClick =()=>{
    const newvotes = [...votes]
    newvotes[selected] += 1
    setVotes(newvotes)
  }

  return (
    <div>
      <h1>Anecdote of the day.</h1>
      {anecdotes[selected]}
      <Vote points={votes[selected]}/>
      <Button handleClick={handleVoteClick} text={'Vote'}/>
      <Button handleClick={handleAnecdoteClick} text={'next anecdote'}/>
      <Most anecdotes={anecdotes} votes={votes}/>
    </div>
    
    
  )
}

export default App