import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  // console.log(items)
const [name, setName] = useState("")
const [category, setCategory] = useState("Produce")

// Get Value of New Name
const handleNameChange = (e) => {
  setName(e.target.value)
}
// console.log(name)

// Get Value of New Category
const handleCategoryChange = (e) => {
  setCategory(e.target.value)
}
// console.log(category)

  // Make an Object with the new Values
  const foodItem = {
    name : name,
    category : category,
    id : uuid()
  }
  // console.log(foodItem)

  const handleItemFormSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(foodItem)
  }
  
  

  return (
    <form onSubmit={(e) => handleItemFormSubmit(e)} className="NewItem">
      <label>
        Name:
        <input onChange={(e) => handleNameChange(e)} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={(e) => handleCategoryChange(e)} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
