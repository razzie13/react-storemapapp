import React from 'react'

export default function ShoppingListItem(props) {
    return (
        <div>
            <h5>{props.shoppingListItem}</h5>
            <button onClick={props.showLocator}>FIND</button>
        </div>
    )
}
