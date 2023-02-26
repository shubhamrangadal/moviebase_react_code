import React from "react";

import Popup from "./AddReview";


const Review = (props) => {
  console.log("Review",props);
    const titleStyle = {
        fontSize: '6em',
        fontWeight: 'bold',
        margin: '2rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#333'
      };

  const boxStyle = {border: '1px solid #333',
  padding: '1rem',
  width: '100%',
  margin: '0 auto',
  display:"flex",
    flexDirection:"column",
    alignItems: 'center',
overflowY: 'scroll',
maxHeight: '60vh'

  };

  const reviewBoxStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
    width: '100%',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
  };

  const reviewList = props.reviews.map(review => (
    <div key={review.id} style={reviewBoxStyle}>
      <h3 style={{ margin: '0' }}>{review.commenttitle}</h3>

      <p style={{ marginBottom: '1rem' }}>{review.commentdesc}</p>
      <p style={{ margin: '0', fontWeight: 'bold' }}>Rating: {review.rating}</p>
    </div>
  ));

  const addReviewButtonStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    borderRadius: '5px',
    marginTop: '2rem',
    border: 'none',
    fontSize: '1.2em',
    cursor: 'pointer',
    };

    return(
        <div>
      <h1 style={titleStyle}>Reviews</h1>
      <div style={boxStyle}>
        {reviewList}
        <button onClick={() => props.setShowAddMovie(true)} style={addReviewButtonStyle}>Add Review</button>
      </div>
    </div>
    )
}

export default Review
