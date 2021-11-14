import React, { useState } from "react";
import Animal from "../Animal";

const AnimalList = ({animals, onAnimalChange, searchAnimals}) => {
    const handleChange = (objAnimal) => {
        onAnimalChange(objAnimal)
    }
    
    return (
          <div className="zvirata">
            {searchAnimals != '' ?
                searchAnimals.map(animal => 
                    <Animal key={animal.id}
                                name={animal.nazev}
                                latin={animal.nazevLatinsky}
                                photo={animal.foto}
                                animal={animal}
                                onChange={handleChange}
                    />)
                :
                animals.map(animal => 
                    <Animal key={animal.id}
                            name={animal.nazev}
                            latin={animal.nazevLatinsky}
                            photo={animal.foto}
                            animal={animal}
                            onChange={handleChange}
                    />) 
            }
        </div>
    )
}

export default AnimalList;