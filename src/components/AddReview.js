import React, { useState } from 'react';

const Popup = ({ AddMovie, Cancel }) => {
  const [commentTitle, setCommentTitle] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AddMovie({
        "rating": rating,
        "commentTitle": commentTitle,
        "commentContent": commentContent,
        "userId": localStorage.getItem("userId"),
        "movieId": props.Movie.id
      });
      Cancel()
  };

  const starStyles = {
    display: 'inline-block',
    fontSize: '3rem',
    cursor: 'pointer',
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '5px',
          width: '50vw',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            margin: '0 0 1rem 0',
            color: '#333',
          }}
        >
          Add Review
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="commentTitle"
              style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}
            >
              Comment Title
            </label>
            <input
              type="text"
              id="commentTitle"
              value={commentTitle}
              onChange={(e) => setCommentTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              htmlFor="commentContent"
              style={{ display: 'block', marginBottom: '0.5rem', color: '#333' }}
            >
              Comment Content
            </label>
            <textarea
              id="commentContent"
              value={commentContent}
              onChange={(e) => setCommentContent(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
              }}
              required
            ></textarea>
          </div>
          <div style={{ marginBottom: '1rem' }}>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              style={num <= rating ? { ...starStyles, color: '#ffbf00' } : starStyles}
              onClick={() => handleStarClick(num)}
            >
              &#9733;
            </span>
          ))}
        </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              type="button"
              onClick={Cancel}
              style={{
                marginRight: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                cursor: 'pointer',
                color:"black"
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: 'gray',
                cursor: 'pointer',
              }}
            >
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
