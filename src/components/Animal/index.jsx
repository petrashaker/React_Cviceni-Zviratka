import React from "react";
import './style.css';

const Animal = ({animal, name, latin, photo, onChange}) => {
    return (
        <div className="zvire" onClick={() => onChange(animal)}>
        <div className="zvire__foto">
            <img src={photo} alt={name} />
        </div>
        <div className="zvire__popis">
            <div className="zvire__nazev">{name}</div>
            <div className="zvire__latinsky">{latin}</div>
        </div>
    </div>
    )
}

export default Animal;