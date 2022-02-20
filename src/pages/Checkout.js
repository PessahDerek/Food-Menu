import React from 'react';
import {useState, useEffect} from 'react';
import CheckList from '../components/CheckList';
import Data from '../data.json';
import OrderBtn from '../components/TrayOrderBtn';

function Checkout(props) {
  const foodItem = (
    Data.myTray.map((item) => <CheckList id={item[Math.random().toString().slice(2)]} key={item.id} food={item['food']} price={item['price']} quant={item['quantity']} />)
  )

 
  var [widget, setWidget] = useState(Data.myTray);
 
  const handleDelete=(item)=> {
    var newList = widget.filter((w) => w.id === item);
    for (var i = 0; i < Data.myTray.length; i++){
      if (Data.myTray[i]['id'] === item){
        console.log('im about to pop', Data.myTray[i]);
        Data.myTray.pop(Data.myTray[i]);
      } else {
        continue;
      }
    }
    console.log('this is', item);
    setWidget(newList);
  }
  
  useEffect(() =>{

  })
  //console.log(widget)


  useEffect(() => {
    setWidget(Data.myTray)
  },[widget])
  
  if (Data.myTray.length <= 0) {
    return <div>
      <h1>Add a Food Item to Your Tray</h1>
    </div>
  }else {
    return <div className="checkout">
      {widget.map(
        (item) => <CheckList key={item['id']} id={item['id']} handleDelete={handleDelete}  food={item['food']} price={item['price']} quant={item['quantity']} />
      )}
      <OrderBtn />
    </div>;
  }
  
}

export default Checkout;
