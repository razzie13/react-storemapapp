import React, { Component } from 'react'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import ShoppingListAlertModal from './ShoppingListAlertModal'

export default class ShoppingList extends Component {

constructor(props) {
    super(props)

    this.textInput = React.createRef();   
}


    render() {
        return (
            <>
            <div className="shopping-list">
                
                <h2>Shopping List <FontAwesomeIcon icon={faCheck} /></h2>
                
                <input ref={this.textInput} onKeyPress={e => (e.key === 'Enter' ? this.props.addGroceryItem(this.textInput) : null)} placeholder="Type List Item Here" />
                <button type="submit" onClick={() => this.props.addGroceryItem(this.textInput)} ref={node => (this.btn = node)}>Add to List</button>
            
                <DragDropContext onDragEnd={this.props.handleOnDragEnd}>
                    <Droppable droppableId="droppableListItems">
                        {(provided) => (
                            <div id="drag-drop-list" {...provided.droppableProps} ref={provided.innerRef}>


                                    {this.props.shoppingListItems.map((groceryItem, index) => 
                                        <Draggable key={groceryItem.text} draggableId={groceryItem.text} index={index}>
                                            {(provided) => (
                                            <div className="shopping-list-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <h5>{groceryItem.text}</h5>
                                                <div className="shopping-list-buttons">
                                                    <button onClick={() => this.props.showLocator(groceryItem.text)} className="find-button">FIND</button>
                                                    <button onClick={() => this.props.removeGroceryItem(groceryItem.text)} className="close-button">X</button>
                                                </div>
                                            </div>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                    
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                
            </div>
            <ShoppingListAlertModal display={this.props.showAlertModal} searchedItem={this.props.searchedItem}/>
            </>
        )
    }
}


