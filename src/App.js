import React, { Component } from 'react'

import './App.css';

// FOOD ITEM LOCATIONS FROM CSS
import './FoodItems.css';

// STORE LAYOUT FROM CSS
import './StoreLayout.css'

import StoreName from "./StoreName/StoreName";
import StoreDetails from './StoreDetails/StoreDetails'
import StoreMap from "./StoreMap/StoreMap";
import ShoppingList from './ShoppingList/ShoppingList'
import ItemLocator from './ItemLocator/ItemLocator'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.removeGroceryItem = this.removeGroceryItem.bind(this);

    this.showItemLocator = this.showItemLocator.bind(this);
    this.hideItemLocator = this.hideItemLocator.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  
    this.state = {
       storeName: 'Westmount & Ottawa FreshCo',
       storeHours: '7am-10pm daily',
       shoppingListItems: JSON.parse(localStorage.getItem('reactShoppingList')),
       showItemLocator: false,
       searchedItem: null,
       creditVisa: true,
       creditMC: true
    }
  }

  showItemLocator = groceryItem => {
    this.setState({
      showItemLocator: true,
      searchedItem: groceryItem
    });
    console.log('function showItemLocator')
    console.log(groceryItem)
  }

  hideItemLocator = removedItem => {
    this.setState({
      showItemLocator: false,
      searchedItem: null
    });
    console.log('function hideItemLocator')
    console.log(removedItem)
  }

  hideItemLocatorAndRemoveItem = removedItem => {
    this.setState({
      showItemLocator: false,
      searchedItem: null
    });
    console.log('function hideItemLocator')
    this.removeGroceryItem(removedItem)
  }
  
  
  addGroceryItem = groceryItem => {
    console.log('function addGroceryItem')
    
    if (groceryItem.current.value !== '')  {
       let newGroceryItem = {
         text: groceryItem.current.value,
         key: groceryItem.current.value  
       };

       this.setState({
         shoppingListItems: [...this.state.shoppingListItems, newGroceryItem]
       });

      console.log(this.state.shoppingListItems)

      groceryItem.current.value = '';

      localStorage.setItem('reactShoppingList', JSON.stringify(this.state.shoppingListItems));

    }   

  }
  
  removeGroceryItem = removedItem => {
    console.log('function removeGroceryItem')
    console.log(removedItem)

    let remainingShoppingListItems = this.state.shoppingListItems.filter(remainingItems => remainingItems.key !== removedItem)
    
    this.setState({
      shoppingListItems: [...remainingShoppingListItems],
      showItemLocator: false,
      searchedItem: null
    });

    localStorage.setItem('reactShoppingList', JSON.stringify(this.state.shoppingListItems));

  }
  
  handleKeyPress = (e) => {
    if (e.key === 'Enter')  {
      console.log('enter key has been pressed')
    }
  }  

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <StoreName locationName={this.state.storeName} />
          <StoreMap />
          <StoreDetails locationHours={this.state.storeHours} visa={this.state.creditVisa} mastercard={this.state.creditMC}/>
          <ItemLocator display={this.state.showItemLocator} searchedItem={this.state.searchedItem} hideLocator={this.hideItemLocator} removeGroceryItem={this.removeGroceryItem}/>
        </div>
        <div className="right-side">
          <ShoppingList shoppingListItems={this.state.shoppingListItems} storeName={this.state.storeName} showLocator={this.showItemLocator} addGroceryItem={this.addGroceryItem} removeGroceryItem={this.removeGroceryItem} keyPressHandler={this.handleKeyPress}/>
        </div>
        
        
      </div>
    )
  }
}

