import React from "react";
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>Serving {props.adjective}, {props.cuisine} and {props.dietType} food to {props.location}</p>
      <img src={restaurant} height={200} alt="napkin and fork at restaurant table"/>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish, i) => 
          <li key={ dish.id }>{ dish.title }</li>
          )}
      </ul>
    </section>
  );
}

function Footer(props){
  return(
    <p>Copyright {props.author}, {props.year}</p>
  );
}

const dishes = [
  "Quinoa and Kale Bowl",
  "Tofu with Vegetables",
  "Sweet Potato and Black Bean Burger",
  "Minestrone"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Laura"/>
      <Main adjective="healthy" dietType="gluten-free" cuisine="Vegan" location="Milwaukee"
      dishes ={dishObjects}
      />
      <Footer author="Laura White" year={new Date().getFullYear()}/>
      </div>
  );
}

export default App;
