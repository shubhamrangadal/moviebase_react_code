import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "../components/MoviesList";
import AddMovie from "../components/AddMovie";
import { Routes, Route } from "react-router-dom";

import classes from "./MoviesPage.module.css";

const MoviePage = (props) => {
    const titleStyle = {
        fontSize: '3em', // changed from 3em to 6em
        fontWeight: 'bold',
        margin: '2rem 0',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#333'
      };
    console.log("Movie Page");
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