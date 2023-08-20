
import React, { useState } from 'react';

function ItemList({ items, onAddItem, onUpdateItem, onDeleteItem }) {
  const [newItem, setNewItem] = useState('');
  const [editItemIndex, setEditItemIndex] = useState(null);

  const handleAddItem = () => {
    if (newItem.trim() === '') return; 
    onAddItem(newItem); // Pass newItem to the parent component
    setNewItem(''); 
  };

  const handleEditItem = (index) => {
    setEditItemIndex(index);
    setNewItem(items[index]);
  };

  const handleUpdateItem = () => {
    if (newItem.trim() === '') return; 
    onUpdateItem(editItemIndex, newItem); // Pass updated item to the parent component
    setEditItemIndex(null);
    setNewItem('');
  };

  return (
    <div className="">
        <div className='d-flex justify-content-center'>
      <input
      className='form-control w-50'
        type="text"
        placeholder="Add or Update"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {editItemIndex !== null ? (
        <button className='btn btn-success mx-3 ' onClick={handleUpdateItem}>Update</button>
      ) : (
        <button className='btn btn-success p-3' onClick={handleAddItem}>Add</button>
      )}
      </div>
      <ul style={{listStyle:"none",}} className='d-flex justify-content-center m-3'>
        {items.map((item, index) => (
          <li className='d-flex '  key={index}>
            <p className='fs-4'>Item:</p>
            <p className= 'mx-2 mt-2 fw-bold'>{item}</p>
            <button className='btn btn-success mx-3' onClick={() => handleEditItem(index)}>Edit</button>
            <button className='btn btn-success mx-1' onClick={() => onDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default ItemList;
