import './App.css';
import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'

function App() {

  const [score, setScore] = React.useState(0)
  const [pps, setPPS] = React.useState(0)
  const [baseValue, setBaseValue] = React.useState(1)
  const [maxScore, setMaxScore] = React.useState(1)
  const [upgrades, setUpgrades] = React.useState([1,10,100,1000,10000])


  function handleBaseClick(){
    setScore((val) => val+baseValue);
    if(score>=maxScore){ setMaxScore(score) }
  }


  function handleClickUpgrade(){
    if(score >= 100){
      setBaseValue((val) => 2*val)
      setScore((val) => val - 100)
    }
  }

  setInterval(tick, 1000)

  function tick(){
    setScore((val) => val + pps)
  }
  function handlePerSecondUpgrade(upgradeNumber){
    setPPS((val) => val + upgrades[upgradeNumber])
  }

  // React.useEffect(() => {
  //   if(maxScore >= 100){
  //     setPassed100(true);
  //   }
  // }, [maxScore])


  return (
    <>
    <Container onClick={handleBaseClick}>
    <Row className="justify-content-center">  Score:  </Row>
    <Row className="justify-content-center" style={{fontSize: '18pt'}}> {score} pts. </Row>
    <Row className="justify-content-center"> +{pps} pts/s.  </Row>
    </Container>


<Container >
      <Col style={{backgroundColor: 'aqua'}}>
        <Row>
          <Col> Double click effect </Col>
          <Col> Buy <br/> Cost: 100 </Col>
        </Row>
        <Row onClick={() => handlePerSecondUpgrade(0)}>
          <Col> Add 1 pps </Col>
          <Col> Buy </Col>
        </Row>
        <Row onClick={() => handlePerSecondUpgrade(1)}>
          <Col> Add 10 pps </Col>
          <Col> Buy </Col>
        </Row>
        <Row onClick={() => handlePerSecondUpgrade(2)}>
          <Col> Add 100 pps </Col>
          <Col> Buy </Col>
        </Row>
        <Row onClick={() => handlePerSecondUpgrade(3)}>
          <Col> Add 1000 pps </Col>
          <Col> Buy </Col>
        </Row>
        <Row onClick={() => handlePerSecondUpgrade(4)}>
          <Col> Add 10000 pps </Col>
          <Col> Buy </Col>
        </Row>
      </Col>
  </Container>
</>
  );
}

export default App;
