import React, { useState } from 'react';
import SearchElementCard from './SearchElementCard';
import { elements } from '../data/elements';
import SearchField from './SearchField';
const style = { 
  display: "flex",
  flexWrap: "wrap",
  placeHolderCard: {
    width: ""
  }
}
function Search() {
  const [filteredElements, setFilteredElements] = useState(elements.slice(0, 16))

  const handleInputChange = (e) => {
    const searchField = e.target.value;
    if (searchField === ""){
      setFilteredElements([])
      return
    }

    const regex = new RegExp(searchField, "i");
    const filtered = elements.filter(elem => elem.name.search(regex) !== -1);

    setFilteredElements(filtered.slice(0, 16))
  }
  return (
    <div>
      <div >
        <SearchField handleInputChange = {handleInputChange} />
      </div>
      <div style={style}>
        { filteredElements.map(el => (
          <div style={{width: "25%", padding: "2%"}} key={el.name} >
            <SearchElementCard el={el} />
          </div>
        ))}
        <div className="placeholder-card" style={style.placeHolderCard}></div>
        <div className="placeholder-card" style={style.placeHolderCard} ></div>
        <div className="placeholder-card" style={style.placeHolderCard} ></div>
      </div>
    </div>
  )
}

export default Search
