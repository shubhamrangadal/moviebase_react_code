import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../components/MoviesList";
import AddMovie from "../components/AddMovie";
import { Routes, Route } from "react-router-dom";

import classes from "./MoviesPage.module.css";

const MoviePage = (props) => {
  const [seenMovies,setSeenMovies] = useState(<p>Found no movies.</p>);
  const [newMovies,setNewMovies] = useState(<p>Found no movies.</p>);
  const [recommendedMovies,setRecommendedMovies] = useState(<p>Found no movies.</p>);
  const userId = localStorage.getItem("userId")
  const titleStyle = {
        fontSize: '3em', // changed from 3em to 6em
        fontWeight: 'bold',
        margin: '2rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#333'
      };
    console.log("Movie Page");
  
    const fetchMoviesHandler = useCallback(async (url,Fn) => {
      try {
        const response = await fetch(
          url
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
  
        const data = await response.json();
  
        const loadedMovies = [];
  
        for (const key in data) {
          loadedMovies.push({
            id: data[key].id,
            title: data[key].title,
            releaseDate: data[key].releaseDate,
            rating: data[key].rating,
            image:data[key].image,
            category:data[key].category,
            director:data[key].director
          });
        }

        let content = <p>Found no movies.</p>;

        if (loadedMovies.length > 0) {
          content = <MoviesList movies={loadedMovies} />;
        }
  
        Fn(content);
      } catch (error) {
      }
    }, []);
  
    useEffect(() => {
      fetchMoviesHandler(`http://localhost:8080/seenmovies/${userId}`,setSeenMovies);
      fetchMoviesHandler(`http://localhost:8080/movies/notseen/${userId}`,setNewMovies);
      fetchMoviesHandler(`http://localhost:8080/movies/recommend/${userId}`,setRecommendedMovies);
    }, [fetchMoviesHandler]);
  
    return (<
        div
        style={{
            width:"100%",
        }}
    >
    <section>
    <h2 style={titleStyle} >Seen Movies</h2>
    {props.content}
      </section>
      <section>
      <h2 style={titleStyle} >New Movies</h2>  
      {props.content}
      </section>
      <section>
      <h2 style={titleStyle} >Recommended Movies</h2>
      {props.content}</section></div>)
}

export default MoviePage;