'use client' 
// pages/MyFormPage.tsx
import React, { useState } from 'react';

const MyFormPage: React.FC = () => {
  const [inputValue1, setInputValue1] = useState<string>('');
  const [inputValue2, setInputValue2] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Pass the input values to your function
    handleFormSubmit(inputValue1, inputValue2);
  };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const handleFormSubmit = (value1: string, value2: string) => {
    // Your function that uses the form input values
    // For demonstration purposes, we'll just log them to the console
    console.log('Form input value 1:', value1);
    console.log('Form input value 2:', value2);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputField1">Enter value 1:</label>
        <input
          type="text"
          id="inputField1"
          value={inputValue1}
          onChange={handleInputChange1}
        />

        <label htmlFor="inputField2">Enter value 2:</label>
        <input
          type="text"
          id="inputField2"
          value={inputValue2}
          onChange={handleInputChange2}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyFormPage;
