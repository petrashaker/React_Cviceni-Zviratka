import React, { useState } from "react";
import './style.css';

const AnimalDetail = ({chosenAnimal, zooList}) => {
    
    //vypíšu jména jednotlivých ZOO
    const arrayNames = zooList.map((i) => i.jmeno);
    console.log(arrayNames)

    //vypíšu čísla jednotlivých ZOO jednoho zvířete
    const arrayNb = chosenAnimal.zoo.map((i) => i)
    console.log(arrayNb)

    //najdu první společný prvek - nevyužiju ?
    // const connectArraysFind = arrayNb.find(element => element.id === arrayNb.id);
    // console.log(connectArraysFind)

    //najdu všechny společné prvky
    const connectArraysFilter = arrayNb.filter(element => element.id === arrayNb.id);
    console.log(connectArraysFilter)

    //vypíšu jména zoo podle čísel zoo od zvířete
    const names = connectArraysFilter.map(i => arrayNames[(i-1)]);
    console.log(names.join())
   
    return (
               <div className="detail" >
               <div className="detail__obsah">
   
                   <div className="detail__hlavicka">
                       <img className="detail__foto" src={chosenAnimal.foto} alt={chosenAnimal.foto} />
                       <div className="detail__titulek">
                           <h2 className="detail__nazev"><span>{chosenAnimal.nazev}</span></h2>
                           <div className="detail__latinsky"><span>{chosenAnimal.nazevLatinsky}</span></div>
                       </div>
                   </div>
   
                   <div className="detail__info">
                       <p className="detail__popis">
                           {chosenAnimal.popis}	
                       </p>
   
                       <div className="detail__udaje">
                           <div className="detail__udaj">
                               <h3>Domovina</h3>
                               <p>{chosenAnimal.domovina}</p>
                           </div>
                           <div className="detail__udaj">
                               <h3>Biotop</h3>
                               <p>{chosenAnimal.biotop}</p>
                           </div>
                           <div className="detail__udaj">
                               <h3>Potrava</h3>
                               <p>{chosenAnimal.potrava}</p>
                           </div>
                           <div className="detail__udaj">
                               <h3>Velikost</h3>
                               <p>{chosenAnimal.velikost}</p>
                           </div>
                            <div className="detail__udaj">
                               <h3>Zoo</h3>
                               {names.map((name,id) => <p key={id}>{name}</p>)}
                            </div> 
                       </div>
                   </div>
   
               </div>
           </div> 
    )
}

export default AnimalDetail;