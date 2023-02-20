import { useState } from "react"

const Button =({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const Stat=({good ,neutral,bad })=>{
  let all,average
  all=good+bad+neutral
  average=good*1+bad*-1+neutral*0
 
  return(
    <div>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>all:{all}</p>
      <p>average:{average/all}</p> 
      <p>positive:{good/all*100}%</p>
      
    </div>
  )
}
const App = () => {
  const [good ,setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick =()=>{
    setGood(good+1)
  }
  const handleNeutralClick =()=>{
    setNeutral(neutral+1)
  }
  const handleBadClick =()=>{
    setBad(bad+1)
  }
  
  return (
  
    <div>
        <h1>gice feedback</h1>
        <Button handleClick={handleGoodClick} text={'good'}/>
        <Button handleClick={handleNeutralClick} text={'neutral'}/>
        <Button handleClick={handleBadClick} text={'bad'}/>
        <h1>
          Statistics
        </h1>
        <Stat good={good} neutral={neutral} bad={bad} />
    </div>
    
  )
}

export default App
