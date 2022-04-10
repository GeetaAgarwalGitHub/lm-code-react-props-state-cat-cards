import "./App.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import Cat from "./data/cat";
import CatCard from "./components/cat_card";
import catDataImages from "./data/catData";

function App() {
	
	  const [cats, setCats] = useState<Array<Cat>>(catDataImages.catData);
  const catCount = cats.length;


  console.log("our preetie", cats);
  // JavaScript code can be inserted here!
  return (
    <>
      <Navbar />
      <Header NumberOfElements={catCount}/>

      <main>
        <h1>Cats Displayed using props</h1>
        <div className="cards__wrapper">

		{/* cats.map((cat, index) => <CatCard key={index} image={catDataImages.CatImages.find(image => image.id === cat.id)} />)*/}
          {cats.map((cat, index) => (
            <CatCard.CatCardUsingProps 
				 id= {cat.id}
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
			  catIndex = {index}
            />
          ))}
        </div>
		{/*<h1>Cats Displayed using object</h1>
        <div className="cards__wrapper">
{cats.map ((cat) => (
	<CatCard.CatCardUsingObject cat = {cat} />
))}
        </div> */}
      </main>

      <Footer />
    </>
  );
}

export default App;
