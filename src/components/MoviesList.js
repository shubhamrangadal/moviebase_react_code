import React from 'react';
import {Link} from "react-router-dom"

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  console.log("movieList",props)
  const handleClick=(movie) => {
    try{
      console.log("Add To Seen Movies");
      props.addMovieHandler(movie).then(
        (data) => {
          console.log("Added to seen")
        }
      ).catch((error) => {
        console.log(error+" movie list failed to add")
      })
    }catch(error) {
      console.log("cant add it")
    }
  }

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <div onClick={() => handleClick(movie)}>
          <Link to={`/movieDetails`} state={{
            movie
          }}>
            <Movie

              key={movie.id}
              image={movie.image}
              title={movie.title}
            />
          </Link>
        </div>
      ))}
    </ul>
  );
};

export default MovieList;
