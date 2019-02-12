import React from 'react';
import './Page2.css';
import rdtIcon from '../../assets/icons/rdt-icon.png';

const RDTIconPage = () => (
  <div>
    <p>
      {'Click on'}
      <img src={rdtIcon} alt="rdt-icon" />
    </p>
    <p>It tells you if the site is using</p>
    <p>React or not</p>
  </div>
);

export default RDTIconPage;
