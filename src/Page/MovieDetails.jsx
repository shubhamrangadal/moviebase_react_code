import React,{useEffect, useState, useCallback} from "react"
import {useLocation,useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


import Review from "../components/Review";
import Details from "../components/Details";
import Popup from "../components/AddReview";

const MovieDetails = (props) => {
    const navigate = useNavigate();
    const [reviews,setReviews] = useState([
        ])
    const [showAddMovie,setShowAddMovie] = useState(false);

    let { state } = useLocation();
    console.log("MovieDetails",state);

    const AddMovie = (movie) => {
        addMovieHandler(movie)
    }

    async function addMovieHandler(movie) {
        console.log("addreview",movie)
        try{
            const response = await fetch(
                "http://localhost:8080/ratings/createrating",
                {
                  method: "POST",
                  body: JSON.stringify(movie),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
            console.log("review response : "+response.ok)
            if (!response.ok) {
              throw new Error("Something went wrong!");
            }


            //const data = await response.json();
            setReviews([...reviews,movie])
        }catch(error){
           throw Error("SomeThing went wrong");
        }
    }

    if(!state) {
        window.location.href = "http://localhost:3000/";
    }

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
              commenttitle: data[key].commenttitle,
              commentdesc: data[key].commentdesc,
              rating: data[key].rating,
              user_id:data[key]['user_id'],
              movie_id:data[key]['movie_id'],
            });
          }

          Fn(loadedMovies);
        } catch (error) {
        }
      }, []);

  const arrowStyle = {
    fontSize: "4em",
    color: "#333",
    margin: "2rem",
    position: "fixed",
    top: "20px",
    left: "20px",
    zIndex: "999",
    cursor: "pointer"
  };

      useEffect(() => {
        fetchMoviesHandler(`http://localhost:8080/ratings/moviebyid/${state.movie.id}`,setReviews);
      },[fetchMoviesHandler])


    return (
        <>
          <div onClick={() => {navigate("/")}} style={{ display: "flex", alignItems: "center", marginBottom: "1rem"}}>
              <FontAwesomeIcon icon={faArrowLeft} style={arrowStyle} />
          </div>
        <div style={{display:"flex",justifyContent:"center",alignItem:"center",height:"100%"}}>
            <section>
                 <Details releaseDate={state.movie.releasedate} rating={state.movie.rating} director={state.movie.moviedirector} category={state.movie.moviecategory} image={state.movie.image}  title={state.movie.title} ></Details>
            </section>
            <section>
                <Review reviews={reviews} setShowAddMovie={setShowAddMovie} ></Review>
            </section>
        </div>
        {
        showAddMovie && <Popup movie={state.movie} AddMovie={AddMovie} Cancel={() => setShowAddMovie(false)}></Popup>
        }
        </>
    )
}

export default MovieDetails
