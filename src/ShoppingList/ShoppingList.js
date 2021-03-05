import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default class ShoppingList extends Component {

constructor(props) {
    super(props)

    this.textInput = React.createRef();   
}

    render() {
        return (
            <div className="shopping-list">
                <h2>Shopping List <FontAwesomeIcon icon={faCheck} /></h2>
                
                <input ref={this.textInput} onKeyPress={this.props.keyPressHandler} placeholder="Type List Item Here" />
                <button type="submit" onClick={() => this.props.addGroceryItem(this.textInput)}>Add to List</button>
            
                {this.props.shoppingListItems.map((groceryItem) => 
                    <div className="shopping-list-item" key={groceryItem.text}>
                        <h5>{groceryItem.text}</h5>
                        <div className="shopping-list-buttons">
                            <button onClick={() => this.props.showLocator(groceryItem.text)} className="find-button">FIND</button>
                            <button onClick={() => this.props.removeGroceryItem(groceryItem.text)} className="close-button">X</button>
                        </div>
                        
                    </div>
                )}
            </div>
        )
    }
}


