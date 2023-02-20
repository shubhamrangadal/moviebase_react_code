import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  console.log("Movie",props);
  return (
    <>
    <div className={classes.card}>
      <img src={props.image} alt={props.title} />
    </div>
    <div className={classes["card-content"]}>
        <h3 className={classes["card-title"]}>{props.title}</h3>
      </div>
</>
  );
};

export default Movie;
