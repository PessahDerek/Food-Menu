import './App.css';
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';
import Beverage from './pages/Beverage';
import Dessert from './pages/Dessert';
import Whole from './pages/Whole';
import TotalWidget from './components/ShowTotal'
import FoodItem from './components/FoodItem';
import data from './data.json'
import useCase from 'react'


function App() {
  // from here
  const [total, setTotal] = useCase(0)
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navBar">
          <div className="actions"> 
            <h2>Welcome to Hajini</h2>
          </div>
          <div className="total">
            <TotalWidget total={total}/>
          </div>
          <div className="foodGroups">
            <a><Link to="/">Beverage</Link></a>
            <a ><Link to="dessert">Dessert</Link></a>
            <a ><Link to="Whole">Whole Meal</Link></a>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Beverage/>}/>
          <Route path="Dessert" element={<Dessert />} />
          <Route path="Whole" element={<Whole/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
