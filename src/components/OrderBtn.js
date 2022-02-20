import React from 'react';
import Payout from '../pages/Payout';
import {Route, Routes, Link} from 'react-router-dom';

function OrderBtn() {
  return <div className="footer">
    <button className="checkoutBtn">
      <Link to="../Payout">
        <a>Make Order</a>
      </Link>
    </button>
    <Routes>
      <Route path="/Payout" element={<Payout />}></Route>
    </Routes>
  </div>;
}

export default OrderBtn;
