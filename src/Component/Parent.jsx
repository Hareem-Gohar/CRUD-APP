
import React, { useState } from 'react';
import ItemList from './child';

function ParentComponent() {
  const [items, setItems] = useState([]);

  //  add a new item 
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // update an existing item
  const updateItem = (index, updatedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;
    setItems(updatedItems);
  };

  //  delete an item
  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1 className='text-center p-3' >CRUD-Functions</h1>
      <hr />
      <ItemList items={items} onAddItem={addItem} onUpdateItem={updateItem} onDeleteItem={deleteItem} />
    </div>
  );
}

export default ParentComponent;
