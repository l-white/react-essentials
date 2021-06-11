import './App.css';

function Header(props){
  console.log(props);
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
    </section>
  );
}

function Footer(props){
  return(
    <p>Copyright {props.author}, {props.year}</p>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Laura"/>
      <Main adjective="healthy" dietType="gluten-free" cuisine="Vegan" location="Milwaukee"/>
      <Footer author="Laura White" year={new Date().getFullYear()}/>
      </div>
  );
}

export default App;
