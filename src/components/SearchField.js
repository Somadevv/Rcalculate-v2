import React from 'react'

const style = {
  input: {
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

function SearchField(props) {

  return (
    <div>
      <input style={style.input} type = "text"  onChange={props.handleInputChange}/>
    </div>
  )
}

export default SearchField
