import React from 'react'
import FoodItem from '../components/FoodItem';
import CheckList from '../components/CheckList';
import TrayOrderBtn from '../components/TrayOrderBtn';

const wholeMenu = [
    {name: 'Fish', price: 300, image: "fish"}, 
    {name: 'Rice', price: 100, image: "rice"},
    {name: 'Beef', price: 250, image: "beef"}
]

function Whole() {
    return (
        <div>
            {wholeMenu.map((food, index) => <FoodItem key = {`${food}${index}`} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
            <TrayOrderBtn />
        </div>

    )
}

export default Whole
