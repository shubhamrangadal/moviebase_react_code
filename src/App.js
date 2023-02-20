import React, { useState, useEffect, useCallback } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./Page/MoviesPage";
import MovieDetails from "./Page/MovieDetails";
import Login from "./Page/LoginPage";

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
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth0();

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {

      const data = output;

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          image: data[key].image
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://http-test-d28cc-default-rtdb.firebaseio.com/Movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  
  console.log("App.js",isAuthenticated);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated?<MoviePage addMovieHandler={addMovieHandler} fetchMoviesHandler={fetchMoviesHandler} content={content}></MoviePage>:<Login></Login>}/>
      <Route path="/movieDetails" element={<MovieDetails></MovieDetails>} ></Route>
    </Routes>
  );
}

export default App;
