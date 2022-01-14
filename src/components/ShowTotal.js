import {React, useState} from 'react'

var total = 0
function yup() {
    console.log("hello");
}
function ShowTotal(props) {
    total = props.total
    return (
        <div>
            <p>{total}</p>
        </div>
    )
}

export default ShowTotal
