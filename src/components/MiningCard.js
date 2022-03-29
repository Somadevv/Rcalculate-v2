import React from 'react'

function MiningCard(props) {
  const style = { 
    card:{
      width: "100%",
      background: "linear-gradient(0deg, rgba(34, 25, 28, 0.33) 25%, rgb(6, 35, 68) 120%)",
      maxWidth: "350px",
      padding: "16px",
      margin: "16px",
      borderRadius: "25px"
    },
    img:{
      width: "100px"
    },
    title:{
      fontSize: "1.35rem", 
      letterSpacing: "1px"
    },
    figure:{
      color: props.color,
    }
  }
  return (
    <div className="result-card" style={style.card}>
      <img className="result-image" style={style.img} src={props.imgSrc} alt="Card cap" />
      <div className="card-body">
        <span className="toggled white" style={style.title}>Daily</span>
        <div id="wax-0" style={style.figure} >{props.figures.daily}</div>
        
        <span className="hidden" style={style.title}>Weekly</span>
        <div id="wax-1" style={style.figure} >{props.figures.weekly}</div>
        
        <span className="hidden" style={style.title}>Monthly</span>
        <div id="wax-2" style={style.figure} >{props.figures.monthly}</div>
        
      </div>
    </div>
  )
}

export default MiningCard
