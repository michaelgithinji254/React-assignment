import React from 'react';

const Films = () => {
  const films = [
    { category: 'Best Picture', title: 'Everything Everywhere All at Once', image: '/keepa.jpg' },
    { category: 'Best Director', title: 'Daniel Kwan and Daniel Scheinert for Everything Everywhere All at Once', image: '/road.jpg' }
  ];

  return (
    <div><br></br>
      <h2>Winning Films of 2023</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <img src={film.image} alt={film.title} style={{ width: '200px', height: 'auto', marginRight: '200px' }} />
            <div>
              <strong>{film.category}</strong>: {film.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Films;
