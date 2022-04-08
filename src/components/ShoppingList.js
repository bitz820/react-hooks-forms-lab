import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import itemData from "../data/items";


function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItem, setSearchedItem] = useState("")
  const [search, setSearch] = useState("")

  const onSearchChange = (e) => {
    setSearchedItem(e.target.value)
    setSearch(e.target.value)
  }

  const showFilteredItems = items.filter(item => item.name.toLowerCase().includes(searchedItem.toLowerCase()))

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay = showFilteredItems.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


// Make a new array of objects with ALL foods, and the new food object included (...)
const onItemFormSubmit = (foodItem) => {
  const updatedList = [
    ...items,
    foodItem]
  setItems(updatedList)
}


 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} setSearch={setSearch} onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
