import React from 'react';
import './Page2.css';
import rdt_icon from '../../assets/icons/rdt-icon.png';

const Page2 = () => (
  <div>
    <p>Click on <img src={rdt_icon} alt="rdt-icon" /></p>
    <p>It tells you if the site is using</p>
    <p>React or not</p>
  </div>
);

export default Page2;
