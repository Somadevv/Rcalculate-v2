import React from 'react'

function ExchangeRateCard(props) {
  const style = {
    img:{
      maxWidth: "35px",
      maxHeight: "35px",
      marginTop: "10px"
    },
    text:{
      color: "white"
    }
  }

  return (
    <div >
      {/* <img src="./" alt={props.imgAlt} style={ style.img }/> */}
      <i className="fas fa-exchange-alt arrowTwo"></i>
      <p style={ style.text } >{props.title}</p>
    </div>
  )
}

export default ExchangeRateCard
