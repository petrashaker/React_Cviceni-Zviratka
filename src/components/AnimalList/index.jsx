import React from "react";
import Animal from "../Animal";

const AnimalList = ({animals, onAnimalChange}) => {

    const handleChange = (objAnimal) => {
        onAnimalChange(objAnimal)
    }
    return (
        <div className="zvirata">

            {animals.map(animal => 
                    <Animal key={animal.id}
                            name={animal.nazev}
                            latin={animal.nazevLatinsky}
                            photo={animal.foto}
                            animal={animal}
                            onChange={handleChange}
                    />
                )
            }
        </div>
    )
}

export default AnimalList;