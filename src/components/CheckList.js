import React from 'react';
import './componentStyle.css';

function CheckList(props) {
    
    return <div className="checkoutList">
        <form>
            <div>
                <label htmlFor="name">Food</label>
                <input type="text" readOnly id='name' value={props.food}></input>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="number" readOnly id='price' value={props.price}></input>
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" readOnly id='quantity' value={props.quant}></input>
            </div>
            <div>
                <label htmlFor="total">Total</label>
                <input type="number" readOnly id='total' value={props.total}></input>
            </div>
            
        </form>
        <button type='button'>Remove</button>
    </div>;
}

export default CheckList;
