import React from 'react';


const Home = (props) => (
  <div className="main-content">
    <div className="container">
      <h2>{props.title}</h2>
      <br/>
      <h3>Welcome to the Oscars Awards Winners 2023</h3>
      <p>
        The 95th Academy Awards honored the best films of 2023. Here are some of the key winners:<br />
        We congratulate all the winners and nominees for their outstanding achievements.
      </p>
     
      <div className="home-image"></div>
      <p> born in the year 1978 obama is 23 years now</p>
      <div className="thumbnail-container">
        <p></p>
        <div className="home-thumbnail-1"></div>
        <div className="home-thumbnail-2"></div>
        <div className="home-thumbnail-3"></div>
      </div>
    </div>
  </div>
);

export default Home;
