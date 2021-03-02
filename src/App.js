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

    this.showItemLocator = this.showItemLocator.bind(this);
    this.hideItemLocator = this.hideItemLocator.bind(this);
  
    this.state = {
       storeName: 'Westmount & Ottawa FreshCo',
       storeHours: '7am-10pm daily',
       shoppingListItems: [
         {
           text: 'bananas',
           key: 'bananas'
         },
         {
          text: 'apples',
          key: 'apples'
        },
        {
          text: 'pears',
          key: 'pears'
        },
        {
          text: 'bread',
          key: 'bread'
        },
        {
          text: 'ice cream',
          key: 'ice cream'
        }
        ],
       showItemLocator: false,
       searchedItem: null
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

  hideItemLocator = () => {
    this.setState({
      showItemLocator: false,
      searchedItem: null
    });
    console.log('function hideItemLocator')
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
    }   
  }
  

  render() {
    return (
      <div className="App">
        <div className="left-side">
          <StoreName locationName={this.state.storeName} />
          <StoreMap />
          <StoreDetails locationHours={this.state.storeHours}/>
          <ItemLocator display={this.state.showItemLocator} searchedItem={this.state.searchedItem} hideLocator={this.hideItemLocator}/>
        </div>
        <div className="right-side">
          <ShoppingList shoppingListItems={this.state.shoppingListItems} storeName={this.state.storeName} showLocator={this.showItemLocator} addGroceryItem={this.addGroceryItem}/>
        </div>
        
        
      </div>
    )
  }
}

