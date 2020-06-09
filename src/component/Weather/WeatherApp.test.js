import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'
import WeatherApp from'./WeatherApp'

// expect.extend({ toBeInTheDocument });

describe('WeatherApp', () => {
  test('Counter_Check_Render', () => {
    const { getByTestId } = render(<WeatherApp />)
    expect(getByTestId('weatherCardBlock')).toBeInTheDocument();
  })
})



