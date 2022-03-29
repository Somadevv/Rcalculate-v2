import React, { Fragment, useContext } from 'react'
import { Context } from '../components/Store';
import MiningPower from './MiningPower';
import Search from './Search';

const style = {
  toggleArea: {
    marginBottom: "16px"
  }
}

function MainContent() {
  const [ state, dispatch ] = useContext(Context);

  const handleToggleClick = () => {
    dispatch({ type: "TOGGLE_VIEW", payload: !state.view})
  }
  
  return (
    <div>
      <div style={style.toggleArea}>
        <button className="btn" onClick={handleToggleClick}>toggle tools</button>
      </div>
     
        { state.view ? 
          <Fragment >
            <div style={style.typewriter} >
              <p id="typingText" className="typingText typingFont text-white">Search for <span className="activeName">New Elements</span></p>
            </div>
              <Search />
          </ Fragment>
          :
          <Fragment >
            <div style={style.typewriter} >
              <p id="typingText" className="typingText typingFont text-white">Enter your <span className="activeName">Mining power</span></p>
            </div>
              <MiningPower /> 
          </ Fragment>
        }

    </div>
  )
}

export default MainContent
