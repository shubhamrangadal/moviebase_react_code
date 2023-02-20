import React from "react"
import {useLocation} from "react-router-dom"

import Review from "../components/Review";
import Details from "../components/Details";

const MovieDetails = (props) => {
    let { state } = useLocation();
    console.log("MovieDetails",state);
    
    
    return (
        <div style={{display:"flex",justifyContent:"center",alignItem:"center",height:"100%"}}>
            <section>
                 <Details imageUrl={state.movie.image} title={state.movie.title} ></Details>
            </section>
            <section>
                <Review></Review>        
            </section>
        </div>
    )
}

export default MovieDetails