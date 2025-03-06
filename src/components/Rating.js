import React, { useState } from 'react';

function Rating({ movieId }) {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
    // Aqui você pode salvar a avaliação no localStorage ou em um backend
  };

  return (
    <div className="rating">
      <h4>Avaliação:</h4>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleRating(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
