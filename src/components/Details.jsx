import React from "react";

const Details = (props) => {
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      };
    
      const imageStyle = {
        width: '80%',
        maxHeight: '500px',
        objectFit: 'contain',
      };
    
      const titleStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        margin: '2rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#333'
      };
    
      return (
        <div style={boxStyle}>
          <img src={props.imageUrl} alt={props.title} style={imageStyle} />
          <h2 style={titleStyle}>{props.title}</h2>
        </div>
      );
}

export default Details