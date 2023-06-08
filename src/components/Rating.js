import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h3>Ratings:</h3>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? 'filled' : 'empty'}`}
            onClick={() => handleRatingChange(value)}
          >
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
