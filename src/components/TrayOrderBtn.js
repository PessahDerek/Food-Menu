import {React} from 'react';
import { useState } from "react";
import Checkout from '../pages/Checkout';
import '../App.css'
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';


function TrayOrderBtn(props) {
    var [btn, chooseBtn] = useState(goToTray());
    
    function goToTray() {
        return <div className='footer'>
                <button className="checkoutBtn" onClick={() => chooseBtn(btn = MakeOrder())}>
                    <Link to="Checkout">
                        <a>Tray</a>
                    </Link>
                </button>
                <Routes>
                    <Route path="Checkout" element={<Checkout />}/>
                </Routes>
            </div>
    }
    //console.log(window.location.href);
    function MakeOrder() {
        return <div className="footer">
            <button className="checkoutBtn"><a>Make Order</a></button>
        </div>
    }
    return btn;
}

export default TrayOrderBtn;
