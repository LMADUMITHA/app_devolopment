import React from 'react';
import '../assets/styles/Decors3.css';

const reviews = [
  {
    rating: 4,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo maiores enim?",
    name: "Nikos"
  },
  {
    rating: 3,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo?",
    name: "Sofia"
  },
  {
    rating: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quo maiores enim? Lorem, ipsum dolor.",
    name: "Kostas"
  }
];

const Decors3 = () => {
  return (
    <section className="reviews-section">
      <h1>Customer Reviews</h1>
      
      <ul className="reviews-grid">
        {reviews.map((review, index) => (
          <li key={index} className="review-card">
            <span className="rating-value" rating-value={review.rating}></span>
            <p className="reviewer-text">{review.text}</p>
            <p className="reviewer-name">- {review.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Decors3;
