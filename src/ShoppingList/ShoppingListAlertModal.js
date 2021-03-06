import React from 'react'

export default function ShoppingListAlertModal(props) {

    let classes = [props.display ? '' : 'hide', 'alert-modal']

    return (
        <div className={classes.join(' ')}>
            <p>
                Turn device sideways to view {props.searchedItem} on the store map.
            </p>
        </div>
    )
}
