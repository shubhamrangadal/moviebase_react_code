import React,{useEffect, useState, useCallback} from "react"
import {useLocation,useNavigate} from "react-router-dom";


import Review from "../components/Review";
import Details from "../components/Details";
import Popup from "../components/AddReview";

const MovieDetails = (props) => {
    const [reviews,setReviews] = useState([
        ])
    const [showAddMovie,setShowAddMovie] = useState(false); 
    const navigate = useNavigate();
    
    let { state } = useLocation();
    console.log("MovieDetails",state);
    
    const AddMovie = (movie) => {
        addMovieHandler(movie).then(
            (data) => {
                setReviews([...reviews,movie])
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }

    async function addMovieHandler(movie) {
        try{
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
              commentTitle: data[key].commentTitle,
              commentContent: data[key].commentContent,
              rating: data[key].rating,
              userId:data[key].userId,
              movieId:data[key].movieId,
            });
          }
    
          Fn(loadedMovies);
        } catch (error) {
        }
      }, []);

      useEffect(() => {
        fetchMoviesHandler(`http://localhost:8080/ratings/moviebyid/${state.movie.id}`,setReviews);
      },[fetchMoviesHandler])
    

    return (
        <>
        <div style={{display:"flex",justifyContent:"center",alignItem:"center",height:"100%"}}>
            <section>
                 <Details title={state.movie.title} ></Details>
            </section>
            <section>
                <Review reviews={reviews} setShowAddMovie={setShowAddMovie} ></Review>        
            </section>
        </div>
        {
        showAddMovie && <Popup AddMovie={AddMovie} Cancel={() => setShowAddMovie(false)}></Popup>
        }
        </>
    )
}

export default MovieDetails