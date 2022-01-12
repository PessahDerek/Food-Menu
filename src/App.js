import logo from './logo.svg';
import './App.css';
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';
import FoodItem from './components/FoodItem';

// import fries from './images/fries.png'
//import fish from './images/fish.png'
// import soda from './images/cocacola.png'
// import juice from './images/juice'
// import rice from '.images/rice.png'
// import sausage from './images/sausage.png'

const fries = '../images/fries.png'
const fish = '../images/fish.png'
const soda = '../images/cocacola.png'
const juice = '../images/juice'
const rice = '../images/rice.png'
const sausage = '../images/sausage.png'

var menu = [
  {name: "Fries", price: 150, image: "fries"},
  {name: 'Sausage', price: 50, image: "sausage"}, 
  {name: 'Soda', price: 30, image: "soda"},
  {name: 'Juice', price: 50, image: "juice"},
  {name: 'Fish', price: 300, image: "fish"}, 
  {name: 'Rice', price: 100, image: "rice"}
]

function App() {
  // from here
  return (
    <div className="App">
      <div className="navBar"></div>
      <BrowserRouter>
        {menu.map(food => <FoodItem key = {food.index} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
      </BrowserRouter>
    </div>
  );
}

export default App;
