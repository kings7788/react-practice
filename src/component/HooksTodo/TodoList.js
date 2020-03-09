import React, { useState }from 'react';

import TodoInput from './TodoInput'
// import TodoItem from './TodoItem'

const TodoList = () => {
  const [items, setItems] = useState([])
  const addItem = text => {
    setItems([...items, { id: Date.now(), text }]);
  }
  return (
    <div>
      <TodoInput addItem={addItem}/>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
  </div>
  )
}
export default TodoList;