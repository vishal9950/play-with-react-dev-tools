import React from 'react';
import './Page6.css';
import SouthParkMe from './Page6Child/Page6Child';

const ParentPage = () => (
  <div>
    <SouthParkMe message="This is passed as a prop from parent." />
    <p>Locate his component in the component tree</p>
    <p>and check its props/state</p>
  </div>
);

export default ParentPage;
