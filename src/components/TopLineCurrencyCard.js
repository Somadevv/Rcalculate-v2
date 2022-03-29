import React from 'react'

function TopLineCurrencyCard(props) {
  
  const style = {
    img:{
      maxWidth: "35px",
      maxHeight: "35px",
      marginTop: "10px"
    },
    text:{
      color: props.color
    }
  }
  return (
    <div >
      <img src={props.src} alt={props.imgAlt} style={ style.img }/>
      <h4 style={ style.text } >{props.title}</h4>
    </div>
  )
}

export default TopLineCurrencyCard;