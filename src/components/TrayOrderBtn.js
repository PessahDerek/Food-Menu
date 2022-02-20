import {React} from 'react';
import { useState, useEffect } from "react";
import Checkout from '../pages/Checkout';
import Payout from '../pages/Payout';
import '../App.css'
import {Route, Router, BrowserRouter, Routes, Link} from 'react-router-dom';


function TrayOrderBtn() {
    var [btnText, setBtnText] = useState("Tray");
    var [goToPath, setPath] = useState('/Checkout');
    var [page, setPage] = useState(<Checkout />);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (pathname == "/Checkout"){
            setBtnText("Make Order");
            setPath('/Payout');
            setPage(<Payout />);
        } else {
            setBtnText("Tray");
            setPath('/Checkout');
            setPage(<Checkout />);
        }
    }, [pathname])
    return <div className='footer'>
            <button className="checkoutBtn">
                <Link to={goToPath}>
                    {btnText}
                </Link>
            </button>
            <Routes>
                <Route path={goToPath} element={page}/>
            </Routes>
        </div>
    }

export default TrayOrderBtn;
