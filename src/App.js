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

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);

    this.state = {
       storeName: 'Kitchener West',
       storeHours: '7am-10pm daily',
       shoppingListItems: [],
       showItemLocator: false,
       shoppingListAlertModal: false,
       searchedItem: null,
       creditVisa: true,
       creditMC: true
    }
  }

  componentDidMount()  {
    localStorage.getItem('reactShoppingList') === null ? 
      this.setState({ shoppingListItems: []}, () => console.log(this.state.shoppingListItems)) : this.setState({ shoppingListItems: JSON.parse(localStorage.getItem('reactShoppingList')) }, () => console.log(this.state.shoppingListItems))
    console.log('componentDidMount')
  }

  showItemLocator = groceryItem => {
    this.setState({
      showItemLocator: true,
      shoppingListAlertModal: true,
      searchedItem: groceryItem
    }, () => console.log('function showItemLocator ' + groceryItem));

    setTimeout(() => {
      this.setState({shoppingListAlertModal: false});
    }, 4000)
  }

  hideItemLocator = () => {
    this.setState({
      showItemLocator: false,
      shoppingListAlertModal: false,
      searchedItem: null
    }, () => console.log('function hideItemLocator'))
  } 
  
  addGroceryItem = (groceryItem) => {
    console.log('function addGroceryItem ' + groceryItem.current.value)

    let newGroceryItem;
    if (groceryItem.current.value !== '')  { newGroceryItem = {text: groceryItem.current.value, key: groceryItem.current.value} }   

    this.setState({ shoppingListItems: [...this.state.shoppingListItems, newGroceryItem] }, () => localStorage.setItem('reactShoppingList', JSON.stringify(this.state.shoppingListItems)));
    groceryItem.current.value = '';
  }
  
  removeGroceryItem = removedItem => {
    console.log('function removeGroceryItem ' + removedItem)

    let remainingShoppingListItems = this.state.shoppingListItems.filter(remainingItems => remainingItems.key !== removedItem)

    this.setState({
      shoppingListItems: [...remainingShoppingListItems],
      showItemLocator: false,
      shoppingListAlertModal: false,
      searchedItem: null
    }, () => localStorage.setItem('reactShoppingList', JSON.stringify(this.state.shoppingListItems)))
  }

  handleOnDragEnd = result => {
    console.log('function handleOnDragEnd')

    const items = Array.from(this.state.shoppingListItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    this.setState({ shoppingListItems: items }, () => localStorage.setItem('reactShoppingList', JSON.stringify(items)))
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
          <ShoppingList shoppingListItems={this.state.shoppingListItems} searchedItem={this.state.searchedItem} showLocator={this.showItemLocator} addGroceryItem={this.addGroceryItem} removeGroceryItem={this.removeGroceryItem} keyPressHandler={this.handleShoppingListEnterPress} showAlertModal={this.state.shoppingListAlertModal} handleOnDragEnd={this.handleOnDragEnd}/>
        </div>
      </div>
    )

  }
}