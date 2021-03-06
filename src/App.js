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

export default class App extends Component {

  constructor(props) {
    super(props)

    this.addGroceryItem = this.addGroceryItem.bind(this);
    this.removeGroceryItem = this.removeGroceryItem.bind(this);

    this.showItemLocator = this.showItemLocator.bind(this);
    this.hideItemLocator = this.hideItemLocator.bind(this);

    this.handleShoppingListEnterPress = this.handleShoppingListEnterPress.bind(this);
  
    this.state = {
       storeName: 'Kitchener West',
       storeHours: '7am-10pm daily',
       shoppingListItems: JSON.parse(localStorage.getItem('reactShoppingList')),
       showItemLocator: false,
       shoppingListAlertModal: false,
       searchedItem: null,
       creditVisa: true,
       creditMC: true,
       showProduce: false,
       showBakery: false,
       showMeat: false,
       showInternationalFoods: false,
       showDealZone: false
    }
  }

  showItemLocator = groceryItem => {
    this.setState({
      showItemLocator: true,
      shoppingListAlertModal: true,
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
  
  handleShoppingListEnterPress = (e, groceryItem) => {
    if (e.key === 'Enter')  {
      console.log('enter key has been pressed')
    }

  }  

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <StoreName locationName={this.state.storeName} />
          <StoreMap display={this.state.showItemLocator} searchedItem={this.state.searchedItem} hideLocator={this.hideItemLocator} removeGroceryItem={this.removeGroceryItem}/>
          <StoreDetails locationHours={this.state.storeHours} visa={this.state.creditVisa} mastercard={this.state.creditMC}/>
        </div>
        <div className="right-side">
          <ShoppingList shoppingListItems={this.state.shoppingListItems} searchedItem={this.state.searchedItem} showLocator={this.showItemLocator} addGroceryItem={this.addGroceryItem} removeGroceryItem={this.removeGroceryItem} keyPressHandler={this.handleShoppingListEnterPress} showAlertModal={this.state.shoppingListAlertModal}/>
          
        </div>
        
        
      </div>
    )
  }
}

