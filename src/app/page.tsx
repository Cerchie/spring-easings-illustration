'use client' 
// pages/MyFormPage.tsx
import React, { useState } from 'react';

const MyFormPage: React.FC = () => {
  const [mass, setMass] = useState<string>('');
  const [stiffness, setStiffness] = useState<string>('');
  const [damping, setDamping] = useState<string>('');
  const [velocity, setVelocity] = useState<string>('');
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Pass the input values to your function
    handleFormSubmit(mass, stiffness, damping, velocity);
  };

  const handleInputChangeMass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMass(event.target.value);
  };

  const handleInputChangeStiffness = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStiffness(event.target.value);
  };
  const handleInputChangeDamping = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDamping(event.target.value);
  };

  const handleInputChangeVelocity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVelocity(event.target.value);
  };
  const handleFormSubmit = (value1: string, value2: string, value3: string, value4: string) => {
    // Your function that uses the form input values
    // For demonstration purposes, we'll just log them to the console
    console.log('Form input value 1:', value1);
    console.log('Form input value 2:', value2);
    console.log('Form input value 1:', value3);
    console.log('Form input value 2:', value4);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="massField">Enter mass:</label>
        <input
          type="text"
          id="massField"
          value={mass}
          onChange={handleInputChangeMass}
        />

<label htmlFor="stiffnessField">Enter stiffness:</label>
        <input
          type="text"
          id="stiffnessField"
          value={stiffness}
          onChange={handleInputChangeStiffness}
        />

        <label htmlFor="velocityField">Enter velocity:</label>
        <input
          type="text"
          id="velocityField"
          value={velocity}
          onChange={handleInputChangeVelocity}
        />

<label htmlFor="dampingField">Enter damping:</label>
        <input
          type="text"
          id="dampingField"
          value={damping}
          onChange={handleInputChangeDamping}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyFormPage;
