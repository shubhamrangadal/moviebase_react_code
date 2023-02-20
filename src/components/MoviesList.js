import React from 'react';
import {Link} from "react-router-dom"

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const handleClick=(movie) => {
     props.setSelectMovie(movie)
  }

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Link to={`/movieDetails`} state={{
         movie
        }}>
          <Movie
          handleClick={() => handleClick(movie)}
          key={movie.id}
          image={movie.image}
          title={movie.title}
        />
        </Link>
      ))}
    </ul>
  );
};

export default MovieList;
