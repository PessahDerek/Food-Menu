import React from 'react'
import FoodItem from '../components/FoodItem'

const wholeMenu = [
    {name: 'Fish', price: 300, image: "fish"}, 
    {name: 'Rice', price: 100, image: "rice"},
    {name: 'Beef', price: 250, image: "beef"}
]

function Whole() {
    return (
        <div>
            {wholeMenu.map(food => <FoodItem key = {food.index} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
        </div>
    )
}

export default Whole
