import { useState } from "react"

const History=({text ,value})=>{
  return(
    <div>
      {text} :{value}
    </div>
  )

}
const Positive=({text ,value})=>{
  return(
    <div>
      {text} :{value}%
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
  let all,average
  all=good+bad+neutral
  average=good*1+bad*-1+neutral*0
  return (
  
    <div>
        <h1>gice feedback</h1>
        <Button handleClick={handleGoodClick} text={'good'}/>
        <Button handleClick={handleNeutralClick} text={'neutral'}/>
        <Button handleClick={handleBadClick} text={'bad'}/>
        <h1>
          Statistics
        </h1>
        <History text={'good'} value={good}/>
        <History text={'neutral'} value={neutral}/>
        <History text={'bad'} value={bad}/>
        <History text={'all'} value={all}/>
        <History text={'average'} value={average/all}/>
        <Positive text={'positive'} value={good/all*100} />
    </div>
    
  )
}

export default App
