import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import AnimalDetail from './components/AnimalDetail';
import AnimalList from './components/AnimalList';
import './style.css';

const App = () =>{
  const [data, setData] = useState()

  const handleData = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then(response => response.json())
    .then(json => setData(json.zvirata))
  }

  useEffect(() => {
    handleData()
  }, [])

  const[chosenAnimal, setChosenAnimal] = useState([])
  const chooseAnimal = (chosenAnimal) => {
    setChosenAnimal(chosenAnimal)
  }
  
  const[zoo, setZoo] = useState()
  const handleZoo = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zoo.json')
    .then(response => response.json())
    .then(json => setZoo(json.zoo))
  }
  useEffect(() => {
    handleZoo()
  }, [])
  // console.log(zoo)

  return (
  <>
	  <h1>Zvířátka v ZOO</h1>

	  <div className="container"> 
      {data && <AnimalList animals={data} onAnimalChange={chooseAnimal}/>}
      {data && <AnimalDetail chosenAnimal={chosenAnimal} zoo={zoo}/>}
    </div>
  </>
)};

render(<App />, document.querySelector('#app'));