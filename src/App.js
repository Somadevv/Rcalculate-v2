import './App.css';
import React, {useEffect, useContext} from 'react';
import { Context } from './components/Store';
import AnimatedRates from './components/AnimatedRates';
import CallToAction from './components/CallToAction';
import MainContent from './components/MainContent';

const style ={
  app: {
    backgroundImage: "radial-gradient(circle at 0% 0%, #373b52, #252736 51%, #1d1e26)",
    minHeight: "100vh",
    color: "white"
  }
}

function App() {

  const [state, dispatch] = useContext(Context)

  const manageDispatch = (data, id) => {
    if(id ==="aether"){
      dispatch({type: 'SET_AETHER_RATE', payload: data.last_price});
    }else if (id === "wax") {
      dispatch({type: 'SET_WAX_RATE', payload: data.market_data.current_price.usd});
    } 
    
  }
  const fetchPrice = (url, priceId) => {
    const body = {
      method: "GET",
    };

    fetch(url, body)
      .then((res) => res.json())
      .then((data) => {
        manageDispatch(data, priceId)
      });
  }

  useEffect(()=> {
    fetchPrice('https://wax.alcor.exchange/api/markets/29', 'aether');
    fetchPrice('https://api.coingecko.com/api/v3/coins/wax','wax' );
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className="App" style={style.app}>
      <AnimatedRates aetherRate={state.aetherRate} waxRate={state.waxRate}  />
      <MainContent />
      <CallToAction />
    </div>
  );
}

export default App;
