import React from 'react';
 

const Actors = () => {
  const actors = [
    { name: 'Best Actor', winner: 'Brendan Fraser', film: 'The Whale', image: '/track.jpg' },
    { name: 'Best Actress', winner: 'Michelle Yeoh', film: 'Everything Everywhere All at Once', image: '/shot.jpg' }
  ];

  return (
    <div className="actors-container">
      <h2>Winning Actors of 2023</h2>
      <ul className="actors-list">
        {actors.map((actor, index) => (
          <li key={index} className="actor-item">
            <img src={actor.image} alt={actor.winner} style={{ width: '200px', height: 'auto', marginRight: '210px' }} className="actor-image" />
            <div className="actor-info">
              <strong>{actor.name}</strong>: {actor.winner} for <em>{actor.film}</em>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Actors;
