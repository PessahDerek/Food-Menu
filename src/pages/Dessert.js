import React from 'react'
import FoodItem from '../components/FoodItem'

const DessertMenu = [
    {name: "Fries", price: 150, image: "fries"},
    {name: 'Sausage', price: 50, image: "sausage"},
    {name: 'Bugher', price: 180, image: "bugher"}
]

function Dessert() {
    return (
        <div>
            {DessertMenu.map(food => <FoodItem key = {food.index} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
        </div>
    )
}

export default Dessert;
