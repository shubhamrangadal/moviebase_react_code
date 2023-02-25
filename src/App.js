import React, { useState, useEffect, useCallback } from "react";
import { useAuth0 } from '@auth0/auth0-react';

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MoviePage from "./Page/MoviesPage";
import MovieDetails from "./Page/MovieDetails";
import Login from "./Page/LoginPage";

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  //test. 
  return (
    <Routes>
      <Route path="/" element={isAuthenticated?<MoviePage></MoviePage>:<Login setIsAuthenticated={setIsAuthenticated}></Login>}/>
      <Route path="/movieDetails" element={<MovieDetails></MovieDetails>} ></Route>
    </Routes>
  );
}

export default App;
