import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import AnimalDetail from './components/AnimalDetail';
import AnimalList from './components/AnimalList';
import Search from './components/Search';
import './style.css';

const App = () =>{
  const [data, setData] = useState();
  const handleData = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
    .then(response => response.json())
    .then(json => setData(json.zvirata))
    .catch(error => {
      console.log('chybaaaa')
      console.error(error)
      })
  }
  useEffect(() => {
    handleData()
  }, [])

  const[chosenAnimal, setChosenAnimal] = useState([])
  const chooseAnimal = (chosenAnimal) => {
    setChosenAnimal(chosenAnimal)
  }

  const [searchAnimals, setSearchAnimals] = useState([]);
  const findAnimal = (searchAnimals) => {
    setSearchAnimals(searchAnimals);
  }

  const[zoo, setZoo] = useState([])
  const handleZoo = () => {
    fetch('https://lrolecek.github.io/zviratka-api/zoo.json')
    .then(response => response.json())
    .then(json => setZoo(json.zoo))
    .catch(error => {
      console.log('chybaaaa')
      console.error(error)
      })
  }
  useEffect(() => {
    handleZoo()
  }, [])
  console.log(zoo)
  
  return (
  <>
	  <h1>Zvířátka v ZOO</h1>
    <div className="container"> 
      <Search placeholder="Vyber si své zvířátko" onSearch={findAnimal} animals={data}/>
      {data && <AnimalList animals={data} onAnimalChange={chooseAnimal} searchAnimals={searchAnimals}/>}
      {chosenAnimal != '' ? <AnimalDetail chosenAnimal={chosenAnimal} zooList={zoo}/> : null}
    </div>
  </>
)};

render(<App />, document.querySelector('#app'));