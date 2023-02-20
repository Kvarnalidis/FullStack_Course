import { useState } from "react"

const History=({text ,value})=>{
  return(
    <div>
      {text} :{value}
    </div>
  )

}

const Button =({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)
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
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text={'good'}/>
        <Button handleClick={handleNeutralClick} text={'neutral'}/>
        <Button handleClick={handleBadClick} text={'bad'}/>
        <h1>
          Statistics
        </h1>
        <History text={'good'} value={good}/>
        <History text={'neutral'} value={neutral}/>
        <History text={'bad'} value={bad}/>
    </div>
    
  )
}

export default App
