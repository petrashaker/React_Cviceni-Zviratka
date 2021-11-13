import React from "react";
import './style.css';

const AnimalDetail = ({chosenAnimal, zoo}) => {
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
                               <p>{chosenAnimal.zoo}</p>
                           </div>
                       </div>
                   </div>
   
               </div>
           </div> 
    )
}

export default AnimalDetail;