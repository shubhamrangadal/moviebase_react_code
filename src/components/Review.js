import React from "react";

const reviews = [
    { id: 1, user: 'John', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', rating: 4 },
    { id: 2, user: 'Sarah', content: 'Fusce tristique sapien sit amet facilisis efficitur.', rating: 3 },
    { id: 3, user: 'Mike', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', rating: 5 },
  ];

const Review = (props) => {
    const titleStyle = {
        fontSize: '6em',
        fontWeight: 'bold',
        margin: '2rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#333'
      };
     
  const boxStyle = {
    border: '1px solid #333',
    padding: '1rem',
    width: '100%',
    height: '100vh',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  const reviewBoxStyle = {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
    width: '90%',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
  };

  const reviewList = reviews.map(review => (
    <div key={review.id} style={reviewBoxStyle}>
      <h3 style={{ margin: '0' }}>{review.user}</h3>
      <p style={{ marginBottom: '1rem' }}>{review.content}</p>
      <p style={{ margin: '0', fontWeight: 'bold' }}>Rating: {review.rating}</p>
    </div>
  ));

    return(
        <div>
      <h1 style={titleStyle}>Reviews</h1>
      <div style={boxStyle}>
        {reviewList}
      </div>
    </div>
    )
}

export default Review