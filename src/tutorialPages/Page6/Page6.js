import React from 'react';
import './Page6.css';
import Page6Child from './Page6Child/Page6Child';

const Page6 = () => (
  <div>
    <Page6Child message="This is passed as a prop from parent." />
    <p>Locate his component in the component tree</p>
    <p>and check its props/state</p>
  </div>
);

export default Page6;
