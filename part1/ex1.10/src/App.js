import { useState } from "react"

const Button =({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const StatisticLine=({text,statistic,num})=>{
  if(num===0){
    return(
      <div>
        <p>{text}:{statistic}</p>
      </div>
    )
  }
  return(
    <div>
      <p>{text}:{statistic}%</p>
    </div>
  )

}
const Stat=({good ,neutral,bad })=>{
  let all,average
  all=good+bad+neutral
  average=good*1+bad*-1+neutral*0
  if(good+bad+neutral===0){
    return (
      <div>
        No feedback given
      </div>  
    )
  }
  return(
    <div>
      <StatisticLine text="good" statistic={good} num={0}/>
      <StatisticLine text="neutral" statistic={neutral} num={0}/>
      <StatisticLine text="bad" statistic={bad} num={0}/>
      <StatisticLine text="all" statistic={all} num={0}/>
      <StatisticLine text="average" statistic={average/all} num={0}/>
      <StatisticLine text="positive" statistic={good/all*100} num={1}/>
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