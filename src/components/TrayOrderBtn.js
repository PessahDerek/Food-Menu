import {React} from 'react';
import { useState } from "react";
import Checkout from '../pages/Checkout';
import '../App.css'
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';


function TrayOrderBtn(props) {
        return <div className='footer'>
                <button className="checkoutBtn">
                    <Link to="../Checkout">
                        <a>Tray</a>
                    </Link>
                </button>
                <Routes>
                    <Route path="/Checkout" element={<Checkout />}/>
                </Routes>
            </div>
    }

export default TrayOrderBtn;
