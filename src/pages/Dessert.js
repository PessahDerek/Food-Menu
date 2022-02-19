import React from 'react'
import FoodItem from '../components/FoodItem';
import TrayOrderBtn from '../components/TrayOrderBtn';
import OrderBtn from '../components/OrderBtn';

const DessertMenu = [
    {name: "Fries", price: 150, image: "fries"},
    {name: 'Sausage', price: 50, image: "sausage"},
    {name: 'Bugher', price: 180, image: "bugher"}
]

function Dessert() {
    return (
        <div>
            {DessertMenu.map((food, index) => <FoodItem key = {`${food}${index}`} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
            <TrayOrderBtn />
        </div>
        
    )
}

export default Dessert;
