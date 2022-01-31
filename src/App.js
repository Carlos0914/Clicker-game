import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {

  const [score, setScore] = React.useState(0)
  const [baseValue, setBaseValue] = React.useState(1)
  const [maxScore, setMaxScore] = React.useState(1)
  const [passed100, setPassed100] = React.useState(false)


  function handleBaseClick(){
    setScore((val) => val+baseValue);
    if(score>=maxScore){ setMaxScore(score) }
    console.log(passed100)
  }

  function handleClickUpgrade(){
    if(score >= 100){
      setBaseValue((val) => 2*val)
      setScore((val) => val - 100)
    }
  }

  React.useEffect(() => {
    if(maxScore >= 100){
      setPassed100(true);
    }
  }, [maxScore])


  return (
    <div className="App">
      <div>
      Score: <br/>
      {score}
        </div>
        <div>
      <button onClick={handleBaseClick} >Add {baseValue} to score</button><br/>
      </div>
      <button
        onClick={handleClickUpgrade}
        style={{display: passed100? '' : 'none'}}
      >
      Double base value<br/>
      Cost: 100
      </button>
      <div>
      </div>
    </div>
  );
}

export default App;
