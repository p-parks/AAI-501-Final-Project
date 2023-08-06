import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

function ReviewForm() {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    setReview(e.target.value);
    fetch('/api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRating(data.rating);
        console.log("review: " + e.target.value + " rating: " + rating);
      });
  };

  return (
    <div>
      <textarea onChange={handleChange} value={review} placeholder="Write your review here..." />
      <br />
      {isClient && (
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name="rating"
          starDimension="25px"
          starSpacing="2px"
        />
      )}
    </div>
  );
}

export default ReviewForm;
