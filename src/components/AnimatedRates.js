import React, { useContext }from 'react'
import { Context } from '../components/Store';
import ExchangeRateCard from './ExchangeRateCard'
import TopLineCurrencyCard from './TopLineCurrencyCard'

const style = {
  main: {
    width: "100%",
    display: "flex",
    justifyContent: "Space-evenly"
  },
  section:{
    width: "20%",
    textAlign: 'center'
  }
}

function AnimatedRates() {
  const [ state ] = useContext(Context)
  return (
    <div style ={style.main}>
      <TopLineCurrencyCard color={"red"} title={"Aether"} src={"./assets/images/aether.png"} imgAlt={"look its a thing"}/>
      <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
      <ExchangeRateCard title={state.aetherRate} />
      <TopLineCurrencyCard color={"orange"} title={"Wax"} src={"./assets/images/wax.png"} imgAlt={"look its a thing"}/>
      <div className="lds-ripple-two">
                <div></div>
                <div></div>
              </div>
      <ExchangeRateCard title={state.waxRate} />
      <TopLineCurrencyCard color={"green"} title={"USDT"} src={"./assets/images/usdt.png"} imgAlt={"look its a thing"}/>
    </div>
  )
}

export default AnimatedRates
