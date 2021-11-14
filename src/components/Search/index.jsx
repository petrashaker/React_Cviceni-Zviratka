import React, { useState } from "react";
import './style.css';

const Search = ({placeholder, onSearch, animals}) => {
    const [filteredAnimal, setFilteredAnimal] = useState([]);
   
    const handleText = ({target}) => {
        const searchWord = target.value;
        const newFilter = animals.filter(animal => 
            animal.nazev.toLowerCase().includes(searchWord.toLowerCase()) 
            || 
            animal.nazevLatinsky.toLowerCase().includes(searchWord.toLowerCase()) 
            )
        setFilteredAnimal(newFilter);
        onSearch(filteredAnimal);
    }
    console.log(filteredAnimal)

    return (
        <input className="input" type="text" onChange={handleText} placeholder={placeholder} />
    )
}

export default Search;
