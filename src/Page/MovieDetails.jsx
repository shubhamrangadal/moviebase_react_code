import React,{useState} from "react"
import {useLocation,useNavigate} from "react-router-dom";


import Review from "../components/Review";
import Details from "../components/Details";
import Popup from "../components/AddReview";

const MovieDetails = (props) => {
    const [reviews,setReviews] = useState([
        {
          "id": 1,
          "rating": 5,
          "commentTitle": "Good",
          "commentContent": "Good movie",
          "userId": 1,
          "movieId": 1
        },
        {
          "id": 2,
          "rating": 3,
          "commentTitle": "Okay",
          "commentContent": "Not bad, not great",
          "userId": 3,
          "movieId": 1
        },
        {
          "id": 3,
          "rating": 4,
          "commentTitle": "Enjoyable",
          "commentContent": "Had a good time watching this movie",
          "userId": 4,
          "movieId": 1
        },
        {
          "id": 4,
          "rating": 5,
          "commentTitle": "Good",
          "commentContent": "Good movie",
          "userId": 2,
          "movieId": 1
        },
        {
          "id": 5,
          "rating": 2,
          "commentTitle": "Disappointing",
          "commentContent": "Not what I was expecting",
          "userId": 5,
          "movieId": 1
        },
        {
          "id": 6,
          "rating": 5,
          "commentTitle": "Amazing",
          "commentContent": "Loved every minute of it",
          "userId": 6,
          "movieId": 1
        },
        {
          "id": 7,
          "rating": 4,
          "commentTitle": "Solid",
          "commentContent": "Solid movie overall",
          "userId": 7,
          "movieId": 1
        },
        {
          "id": 8,
          "rating": 3,
          "commentTitle": "Meh",
          "commentContent": "Nothing special",
          "userId": 8,
          "movieId": 1
        },
        {
          "id": 9,
          "rating": 4,
          "commentTitle": "Decent",
          "commentContent": "Decent movie",
          "userId": 9,
          "movieId": 1
        },
        {
          "id": 10,
          "rating": 5,
          "commentTitle": "Great",
          "commentContent": "Great movie",
          "userId": 10,
          "movieId": 1
        }
        ])
    const [showAddMovie,setShowAddMovie] = useState(false); 
    const navigate = useNavigate();
    
    let { state } = useLocation();
    console.log("MovieDetails",state);
    
    const AddMovie = (movie) => {
        setReviews([...reviews,movie])
    }
     
    if(!state) {
        window.location.href = "http://localhost:3000/";
    }
    

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