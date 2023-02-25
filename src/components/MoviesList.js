import React from 'react';
import {Link} from "react-router-dom"

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const handleClick=(movie) => {
    if(props.addMovieHandler) {
      props.addMovieHandler(movie).then(
        (data) => {
          console.log("Added to seen")
        }
      ).catch((error) => {
        console.log(error)
      })
    }
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
