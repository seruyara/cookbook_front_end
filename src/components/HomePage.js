import React from 'react';
import img1 from './images/background1.jpg';
import Reviews from './Reviews';

const Homepage = () => {
  return (
    <div id='homepage'>
      {/* <h1>Welcome to My Cookbook</h1>
      <p>Discover and share delicious recipes</p> */}
        <img src={img1} alt='pic' className="homepage-image" />
      <Reviews/>
     </div>
  );
};

export default Homepage;
