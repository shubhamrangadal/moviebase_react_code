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
  
    const fetchMoviesHandler = useCallback(async (url,Fn,addToSeen) => {
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
          content = addToSeen ? <MoviesList addMovieHandler={addMovieHandler} movies={loadedMovies} /> : <MoviesList movies={loadedMovies} />;
        }
  
        Fn(content);
      } catch (error) {
      }
    }, []);

    async function addMovieHandler(movie) {
      let payload = {
        "date":new Date().toISOString(),
        "movieId":movie.id,
        "userId":localStorage.getItem("userId")
      }

      try{
          const response = await fetch(
              "http://localhost:8080/seenmovies/addseenmovie",
              {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (!response.ok) {
                throw new Error("Something went wrong!");
              }
    
            const data = await response.json();
            console.log(data);
            return data
      }catch(error){
         throw Error("SomeThing went wrong");
      }
  }
  
    useEffect(() => {
      fetchMoviesHandler(`http://localhost:8080/seenmovies/${userId}`,setSeenMovies,false);
      fetchMoviesHandler(`http://localhost:8080/movies`,setNewMovies,true);
      fetchMoviesHandler(`http://localhost:8080/movies/notseen/${userId}`,setRecommendedMovies,true);
    }, [fetchMoviesHandler]);
  
    return (<
        div
        style={{
            width:"100%",
        }}
    >
    <section>
    <h2 style={titleStyle} >Seen Movies</h2>
    {seenMovies}
      </section>
      <section>
      <h2 style={titleStyle} >New Movies</h2>  
      {newMovies}
      </section>
      <section>
      <h2 style={titleStyle} >Recommended Movies</h2>
      {recommendedMovies} </section></div>)
}

export default MoviePage;