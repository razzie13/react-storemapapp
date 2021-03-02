import React, { Component } from 'react'

export default class ShoppingList extends Component {

constructor(props) {
    super(props)

    this.textInput = React.createRef();   
}


    render() {
        return (
            <div className="shopping-list">
                <h2>Shopping List</h2>
                <h6>{this.props.storeName}</h6>
                <form onSubmit={this.props.addGroceryItem}>
                    <input ref={this.textInput} placeholder="Type List Item" />
                    <button type="submit">Add to List</button>
                </form>
    
                {this.props.shoppingListItems.map((foodItem) => {
                    <div key={foodItem.key}>
                        <h5>{foodItem.text}</h5>
                        <button onClick={this.props.showLocator}>FIND</button>
                    </div>
                })}
            </div>
        )
    }
}


