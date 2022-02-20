import './App.css';
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';
import Beverage from './pages/Beverage';
import Dessert from './pages/Dessert';
import Whole from './pages/Whole';
import Checkout from './pages/Checkout';
import BtnImg from './images/tray.png';
import TotalWidget from './components/ShowTotal';
import { useState } from "react";
import TrayOrderBtn from './components/TrayOrderBtn';
import Payout from './pages/Payout';
import OrderBtn from './components/OrderBtn';



function App() {
  const [theBtn, setBtn] = useState(<TrayOrderBtn onclick="order" />)
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navBar">
          <div className="actions"> 
            <h2>Welcome to Hajini</h2>
          </div>
          <div className="foodGroups">
            <Link to="">Beverage</Link>
            <Link to="Dessert">Dessert</Link>
            <Link to="Whole">Whole Meal</Link>
          </div>
          
        </div>
        
        <Routes>
          <Route path="/*" element={<Beverage/>}/>
          <Route path="/Dessert/*" element={<Dessert />} />
          <Route path="/Whole/*" element={<Whole/>} />
          <Route path="/Checkout/*" element={<Checkout />}/>
          <Route path="/Payout/*" element={<Payout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
