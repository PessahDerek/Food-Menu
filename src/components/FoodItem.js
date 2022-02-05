import React from 'react'
import ShowTotal from './ShowTotal';
import fries from '../images/fries.png';
import sausage from '../images/sausage.jpeg';
import fish from '../images/fish.png';
import soda from '../images/cocacola.png';
import rice from '../images/rice.png';
import juice from '../images/juice.png';
import coffee from '../images/coffee.png'
import bugher from '../images/bugher.png'
import chicken from '../images/chicken.webp'
import beef from '../images/beef.png';
import { useState } from 'react';
import data from '../data.json'

const menu = 
    {"fries": fries,
    "sausage": sausage,
    "fish": fish,
    "soda": soda,
    "rice": rice,
    "juice": juice,
    "coffee": coffee,
    "bugher": bugher,
    'chicken': chicken,
    'beef': beef
}

const foodItemStyle = {
    width: "90%",
    height: "25vmax",
    backgroundColor: "white",
    margin: "5%",
    position: "relative",
    boxShadow: "2px 4px 8px #0002",
    display: "flex",
}
const foodImgStyle = {
    width: "48%",
    padding: "0",
    height: "80%",
    backgroundColor: "white",
    border: "none",
    borderRadius: "15px",
    margin: "1%",
}
const menuInputStyle = {
    border: "none",
    borderBottom: "1px orangered solid",
    outline: "none",
    backgroundColor: "transparent",
    height: "3vmax",
    textAlign: 'center',
    width: '90%',
    marginLeft: "4%",
}
const menuInputStyleAct = {
    border: "1px skyblue solid",
    width: "90%",
    height: "3vmax",
    marginLeft: "2%",
    textAlign: "center"
}
const formStyle = {
    width: "50%",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
}
const menuInputStyleActive = {
    border: "1px skyblue solid",
    width: "90%",
    height: "3vmax",
    marginLeft: "2%",
    textAlign: "center",
    outline: "none"
}
const formButton = {
    marginTop: "10%",
    height: "3vmax",
    border: "none",
    backgroundColor: "orangered",
    color: "white",
    boxShadow: "2px 2px 8px #0004"
}

const usedIds = []
function createId(){
    let min = Math.ceil(1);
    let max = Math.floor(20);
    return Math.floor(Math.random() * (max - min) + min);
}

function FoodItem(props) {
    const [unit, setunit] = useState(0);
    function total(event){
        setunit(event.target.value);
        //activate();
    }
    
    function activate(){
        const totalIs = props.foodPrice * unit;
        const id = createId();
        if (usedIds.includes(id)){
            activate();
        } else {
            const trayArray = {
            "food": props.foodName,
            "price": props.foodPrice,
            "quantity": unit,
            "total": totalIs,
            "id": id,
            }
            data.myTray.push(trayArray);
        }
        console.log(data.myTray);
    }
    return (
        <div style={foodItemStyle}>
            <img style={foodImgStyle} src={menu[props.foodImage]}></img>
            <form style={formStyle}>
                <input style={menuInputStyle} disabled type="text" value={props.foodName}/>
                <label htmlFor="price">Price</label>
                <input style={menuInputStyleAct} disabled type="number" value={props.foodPrice}/>
                <label htmlFor="quant" >Quantity</label>
                <input id='btn' style={menuInputStyleActive} type="number" onChange={total} />
                <button onClick={activate} style={formButton} type='button'>Add to Tray</button>
            </form>
        </div>
    )
}

export default FoodItem;
