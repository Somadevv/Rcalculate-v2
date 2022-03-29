import React from 'react'

const style = {
  container: {
     display: "flex"
  },
  panel: {
    width: "47.5%",
    margin: "2.5%",
    background: "linear-gradient(0deg, rgba(34, 25, 28, 0.329) 25%, rgb(6, 35, 68) 120%)",
    borderRadius: "25px",
    boxShadow: "5px 5px 15px 5px #00000080",
    padding: "16px",
    textAlign: "left"
  },
  image: {
    height: "125px"
  }
}

function CallToAction() {
  
  return (
    <div style={style.container}>
      <div style={style.panel}>
        <a href="https://discord.gg/gM9f9bSPxh" target="_blank" rel="noreferrer" >
          <img src="/assets/images/discord.png" alt="discord" id="discord-join-link" style={style.image}/>
        </a>
        <p className="donate-text">If you have any suggestions or would like to follow the development<br /> of this project and future projects join our discord!</p>
        <h2 style={{color: "rgb(105, 155, 230)"}}>Notice</h2>
        <p>RCalculator is in alpha and is a work in progress.<br /> Users may experience UI misbehavior.<br /></p>
      </div>
      <div style={style.panel}>  
        <a href="https://www.paypal.com/donate?business=zomadev1%40gmail.com&item_name=For+upkeep+of+the+development+of+Rcalculator&currency_code=GBP" target="_blank" rel="noreferrer" >
          <img src="/assets/images/paypal.png" id="paypal" alt="" srcSet="" style={style.image}/>
        </a>
        <p className="donate-text">Donations go a long way and are highly appreciated. Donations are put back into the development of the project</p>
        <p className="donate-text">Alternatively you can donate WAX</p>
        <span style={{color: "#ffe91e", fontWeight: "900", fontSize: "2rem"}}>tnrk.wam</span>
          
      </div>
    </div>
  )
}

export default CallToAction
