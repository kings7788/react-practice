import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import Counter from'./Counter'

// expect.extend({ toBeInTheDocument });

describe('Counter', () => {
  test('Counter_Check_Render', () => {
    const { getByTestId } = render(<Counter />)
    expect(getByTestId('counterBlock')).toBeInTheDocument();
  })
  test('Counter_Check_AddCountBtn', () => {
    const { getByTestId } = render(<Counter />)
    expect(getByTestId('counter').textContent).toBe('0');

    const addCountBtn = getByTestId('addCounterBtn')
    fireEvent.click(addCountBtn)
    expect(getByTestId('counter').textContent).toBe('1');
  })
})



