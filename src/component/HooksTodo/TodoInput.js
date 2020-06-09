import React, { useState, useRef, useEffect } from 'react';

const TodoInput = ({ addItem }) => {
  const [text, setText] = useState('')
  const onChagneText = e => {
    console.log('hello');
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addItem(text);
    setText('');
  }
  const ref = useRef()
  
  useEffect(() => {
    ref.current.focus();
  });

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChagneText}  ref={ref}  />
      <button type="submit" >Submit</button>
    </form>
  )
}
export default TodoInput;