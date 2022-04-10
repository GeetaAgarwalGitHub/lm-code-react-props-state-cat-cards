import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import catDataImages from "./data/catData";
import Dog from "./data/dog";
import DogCard from "./components/dog_card";
import DogData from "./data/dog-data";

function App() {
  const [cats, setCats] = useState<Array<Cat>>(catDataImages.catData);
  const [dogs, setDogs] = useState<Array<Dog>>(DogData);
  const catCount = cats.length;
  const dogCount = dogs.length;

  // JavaScript code can be inserted here!
  return (
    <>
      <Navbar />
      <Header NumberOfElements={catCount} Animal={"Cat(s)"} />

      <main>
        <h1>Cats Displayed using props</h1>
        <div className="cards__wrapper">
          {cats.map((cat, index) => (
            <CatCard.CatCardUsingProps
              id={cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
            />
          ))}
        </div>

        <Header NumberOfElements={dogCount} Animal={"Dog(s)"} />

        <h1>Dogs Displayed using props</h1>
        <div className="cards__wrapper">
          {dogs.map((dog) => (
            <DogCard.DogCardUsingProps
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
