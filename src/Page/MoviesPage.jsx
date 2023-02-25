import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../components/MoviesList";
import AddMovie from "../components/AddMovie";
import { Routes, Route } from "react-router-dom";

import classes from "./MoviesPage.module.css";

const output = [
  {
      "id": 22,
      "title": "Rambo: Last Blood",
      "releaseDate": "2019",
      "rating": 5.8,
      "image": "https://image.tmdb.org/t/p/original/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
      "category": "Action",
      "director": "Adrian Grunberg"
  },
  {
      "id": 23,
      "title": "Jumanji: The Next Level",
      "releaseDate": "2019",
      "rating": 6.7,
      "image": "https://image.tmdb.org/t/p/original/bB42KDdfWkOvmzmYkmK58ZlCa9P.jpg",
      "category": "Adventure",
      "director": "Jake Kasdan"
  },
  {
      "id": 24,
      "title": "Charlies Angels",
      "releaseDate": "2019",
      "rating": 5.8,
      "image": "https://image.tmdb.org/t/p/original/4K86L3qLrXyRDZ8DMpvLmx6JFuA.jpg",
      "category": "Action",
      "director": "Elizabeth Banks"
  },
  {
      "id": 25,
      "title": "The Irishman",
      "releaseDate": "2019",
      "rating": 7.9,
      "image": "https://image.tmdb.org/t/p/original/vCHTIBT6TJU6unGI0AMr5BXwVFI.jpg",
      "category": "Crime",
      "director": "Martin Scorsese"
  },
  {
      "id": 26,
      "title": "Doctor Sleep",
      "releaseDate": "2019",
      "rating": 7.1,
      "image": "https://image.tmdb.org/t/p/original/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",
      "category": "Horror",
      "director": "Mike Flanagan"
  },
  {
      "id": 27,
      "title": "1917",
      "releaseDate": "2019",
      "rating": 8.3,
      "image": "https://image.tmdb.org/t/p/original/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      "category": "Drama",
      "director": "Sam Mendes"
  },
  {
      "id": 1,
      "title": "Avengers: Endgame",
      "releaseDate": "2019",
      "rating": 8.4,
      "image": "https://image.tmdb.org/t/p/original/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "category": "Action/Adventure",
      "director": "Anthony Russo, Joe Russo"
  },
  {
      "id": 2,
      "title": "The Lion King",
      "releaseDate": "2019",
      "rating": 6.9,
      "image": "https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
      "category": "Family/Adventure",
      "director": "Jon Favreau"
  },
  {
      "id": 3,
      "title": "Joker",
      "releaseDate": "2019",
      "rating": 8.4,
      "image": "https://im˳age.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "category": "Thriller/Drama",
      "director": "Todd Phillips"
  },
  {
      "id": 4,
      "title": "Frozen II",
      "releaseDate": "2019",
      "rating": 7.1,
      "image": "https://image.tmdb.org/t/p/original/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      "category": "Family/Adventure",
      "director": "Chris Buck, Jennifer Lee"
  }
]

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
  
    /* useEffect(() => {
      fetchMoviesHandler(`http://localhost:8080/seenmovies/${userId}`,setSeenMovies);
      fetchMoviesHandler(`http://localhost:8080/movies/notseen/${userId}`,setNewMovies);
      fetchMoviesHandler(`http://localhost:8080/movies/recommend/${userId}`,setRecommendedMovies);
    }, [fetchMoviesHandler]);
   */
  
    useEffect(() => {
      let content = <MoviesList movies={output} />;
     setSeenMovies(content);
    },[])

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
      {recommendedMovies}</section></div>)
}

export default MoviePage;