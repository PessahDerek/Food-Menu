import React from 'react';
import useCase from 'react';
import CheckList from '../components/CheckList';
import Data from '../data.json';
import OrderBtn from '../components/TrayOrderBtn';

function Checkout() {
  const noFood = {
    textAlign: "center"
  }
  console.log(window.location.href);

  if (Data.myTray.length == 0) {
    return <div>
      <h1 style={noFood}>Add a Food Item to Your Tray</h1>
    </div>
  }else {
    return <div className="checkout">
      {Data.myTray.map(item => <CheckList key={item.id} food={item.food} price={item.price} quant={item.quantity} total={item.total} />)}
      <OrderBtn />
    </div>;
  }
  
}

export default Checkout;
