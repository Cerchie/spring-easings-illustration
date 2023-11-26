'use client' 

import styles from './page.module.css'
import React, { useState } from 'react';
import anime from 'animejs';

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
  const handleFormSubmit = (mass: string, stiffness: string, damping: string, velocity: string) => {
    anime({
      targets: '.divToAnimate',
      translateX: 250,
      direction: 'alternate',
      loop: true,
      easing: `spring(${mass}, ${stiffness}, ${damping}, ${velocity})`
    })
    console.log('mass value from form', mass);
  };

  return (
    <div id="springcontainer" className={styles.springcontainer}>
      <h1>Spring Easing</h1>
      <form onSubmit={handleSubmit} className={styles.springForm}>
        <label htmlFor="massField" className={styles.springLabel}>Enter mass:</label>
        <input
          type="text"
          id="massField"
          value={mass}
          onChange={handleInputChangeMass}
          className={styles.springInput}
        />

<label htmlFor="stiffnessField" className={styles.springLabel}>Enter stiffness:</label>
        <input
          type="text"
          id="stiffnessField"
          value={stiffness}
          onChange={handleInputChangeStiffness}
          className={styles.springInput}
        />

<label htmlFor="dampingField" className={styles.springLabel}>Enter damping:</label>
        <input
          type="text"
          id="dampingField"
          value={damping}
          onChange={handleInputChangeDamping}
          className={styles.springInput}
        />

        <label htmlFor="velocityField" className={styles.springLabel}>Enter velocity:</label>
        <input
          type="text"
          id="velocityField"
          value={velocity}
          onChange={handleInputChangeVelocity}
          className={styles.springInput}
        />
        <button type="submit"    className={styles.springButton}>Submit</button>
      </form>
      <div className="divToAnimate">DIV</div>
      <style jsx>{`
        .divToAnimate{
         background-color: #B4F8C8;;
         width: 4em;
         height: 4em;
         border-radius: 50%;
         margin: 4em;}
      `}</style>
    </div>
  );
};

export default MyFormPage;
