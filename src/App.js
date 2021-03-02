import React, { Component } from 'react'

import './App.css';

// FOOD ITEM LOCATIONS FROM CSS
import './FoodItems.css';

import StoreName from "./StoreName/StoreName";
import StoreDetails from './StoreDetails/StoreDetails'
import StoreMap from "./StoreMap/StoreMap";
import ShoppingList from './ShoppingList/ShoppingList'
import ItemLocator from './ItemLocator/ItemLocator'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.addGroceryItem = this.addGroceryItem.bind(this);

    this.showItemLocator = this.showItemLocator.bind(this);
    this.hideItemLocator = this.hideItemLocator.bind(this);
  
    this.state = {
       storeName: 'Westmount & Ottawa FreshCo',
       storeHours: '7am-10pm daily',
       shoppingListItems: [],
       showItemLocator: true
    }
  }

  showItemLocator = () => {
    this.setState({
      showItemLocator: true
    })
  }

  hideItemLocator = () => {
    this.setState({
      showItemLocator: false
    })
  }
  
  addGroceryItem = e => {
    console.log('function addGroceryItem')
   


    if (this.textInput.value !== '')  {
      let newGroceryItem = {
        text: this.textInput.value,
        key: Date.now()
      };

      

      this.setState({
        shoppingListItems: [...this.state.shoppingListItems, newGroceryItem]
      });
    }   

    this.textInput.value = "";
    e.preventDefault();
    
    console.log(this.state.shoppingListItems)
  }
  

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <StoreName locationName={this.state.storeName} />
          <StoreMap />
          <StoreDetails locationHours={this.state.storeHours}/>
        </div>
        <div className="right-side">
          <ShoppingList shoppingListItems={this.state.shoppingListItems} storeName={this.state.storeName} showLocator={this.showItemLocator} addGroceryItem={this.addGroceryItem}/>
        </div>
        
        
        <ItemLocator display={this.state.showItemLocator} hideLocator={this.hideItemLocator}/>
      </div>
    )
  }
}

