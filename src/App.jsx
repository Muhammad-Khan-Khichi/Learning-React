import { useState } from "react";
import AnimalShow from "./components/AnimalShow";

function getRandomAnimal() {
  const animals = [
  "bird",
  "cat",
  "cow",
  "dog",
  "gator",
  "horse"
];

return animals[Math.floor(Math.random() * animals.length)]

}



function App() {
  const [animals, setAnimals] = useState([])

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()])
  }

  const renderAnimals = animals.map((animal, idx) => {
    return <AnimalShow type={animal} key={idx}/>
  })
  return (
    <div className="flex flex-col items-center">
    <button className="bg-green-400 p-1 cursor-pointer" onClick={handleClick}>Add Animal</button>
    <div className="flex flex-row flex-wrap justify-center">{renderAnimals}</div>
    </div>
  );
}

export default App;
