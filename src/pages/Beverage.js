import React from 'react'
import FoodItem from '../components/FoodItem'

const Bevarages = [
    {name: 'Soda', price: 30, image: "soda"},
    {name: 'Juice', price: 50, image: "juice"},
    {name: 'Coffee', price: 80, image: "coffee"},
    {name: 'Juice', price: 70, image: 'juice'}
]

function Beverage() {
    return (
        <div>
            {Bevarages.map(food => <FoodItem key = {food.index} foodName={food.name} foodPrice={food.price} foodImage={food.image} />)}
        </div>
    )
}

export default Beverage
