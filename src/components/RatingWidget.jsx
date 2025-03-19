import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              color: star <= (hoveredRating || rating) ? 'gold' : 'gray',
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
