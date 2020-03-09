import React, { useState} from 'react';

const TodoInput = ({ addItem }) => {
  const [text, setText] = useState('')
  const onChagneText = e => {
    console.log('hello');
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addItem(text);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChagneText} />
      <button type="submit" >Submit</button>
    </form>
  )
}
export default TodoInput;