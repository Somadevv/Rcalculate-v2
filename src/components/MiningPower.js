import React, { useState, useContext } from 'react'
import { Context } from '../components/Store';
import MiningCard from './MiningCard'
import PowerInput from './PowerInput'

const style = {
  container:{
    display: "flex",
    justifyContent: "center"
  },
  input:{
    height: "34px,",
    opacity: "0.4",
    marginLeft: "10px",
    marginTop:" 25px",
    letterSpacing: "2px",
    width: "200px",
    border: "1px solid #ff1e7c",
    outline:" 0",
    fontSize: "1rem",
    color: "rgb(255, 255, 255)",
    padding:" 3px 0",
    background: "transparent",
    transition: "border-color 0.2s",
  }
}
function MiningPower() {
  const [ state ] = useContext(Context)
  const [figures, setFigures] = useState({
    aether:{
      daily: 100,
      weekly: 200,
      monthly: 300
    },
    wax:{
      daily: 400,
      weekly: 500,
      monthly: 600
    },
    usdt:{
      daily: 700,
      weekly: 800,
      monthly: 900
    },
  })
  const userInput = 200
  const handleInput = (userInput) => {
    console.log("user input = ", userInput) 
    setFigures(calculateFigures(userInput));
  }

  const calculateFigures = (userInput) => {
    const resultsObject = {
      aether: {
        daily: calcDaily(userInput),
        weekly: calcWeekly(userInput),
        monthly: calcMonthly(userInput),
      },
    };
    console.log(state.waxRate);

    resultsObject.wax = {
      // Price of WAX * Daily Aether
      daily: resultsObject.aether.daily * state.aetherRate,
      weekly: resultsObject.aether.weekly * state.aetherRate,
      monthly: resultsObject.aether.monthly * state.aetherRate,
    }
    resultsObject.usdt = {
      // Price of WAX * Daily Aether
      daily: resultsObject.wax.daily * state.waxRate,
      weekly: resultsObject.wax.weekly * state.waxRate,
      monthly: resultsObject.wax.monthly * state.waxRate,
    };
  
    return resultsObject;
  };
  const calcDaily = (sum1) => {
    const result = sum1 * 24;
    return result;
  }
  const calcWeekly = (sum1) => {
    const result = sum1 * 168;
    return result;
  }
  const calcMonthly = (sum1) => {
    const result = sum1 * 730;
    return result;
  }

  
  return (
    <div>
      <PowerInput handleInput={handleInput} />
      <div style={style.container}> 
        <MiningCard name={"Aether"} color={"red"} imgSrc={"assets/images/aether.png"} userInput={userInput} figures={figures.aether}  />
        <MiningCard name={"Wax"} color={"orange"} imgSrc={"assets/images/wax.png"} userInput={userInput} figures={figures.wax} />
        <MiningCard name={"USDT"} color={"green"} imgSrc={"assets/images/usdt.png"} userInput={userInput} figures={figures.usdt}  />
      </div>
    </div>
  )
}

export default MiningPower
