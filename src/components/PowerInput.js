import React, { useState } from 'react'
const style = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  form:{
    display: "flex",
    alignItems: "baseline"
  },
  input: {
    height: "34px",
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

function PowerInput(props) {
  const [value, setValue] = useState(0)

  const handleInputChange = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value)
    props.handleInput(value)
  }
  return (
    <div style ={style.container}>
      <form style={style.form}onSubmit={handleSubmit}>
        <input style={style.input} onChange={handleInputChange} type="text"/>
        <button className="btn" >CalculateEarnings</button>
      </form>
    </div>
  )
}

export default PowerInput
