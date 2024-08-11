import React, { useState } from 'react';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = useState([
        
    ]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const r = "Reviewd By";
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
            id: reviews.length + 1,
           name,
            content,
        };
        setReviews([...reviews, newReview]);
        setName('');
        setContent('');
    };

    return (
        <div className="review-container">
            <h2>Customer Reviews</h2>
            <form className="review-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Your Review"
                    required
                ></textarea>
                <button type="submit">Submit Review</button>
            </form>
            <div className="reviews">
                {reviews.map(review => (
                    <div key={review.id} className="review-card">
                        <h3> Reviewed By : {review.name}</h3>
                        <p> Review : {review.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;
