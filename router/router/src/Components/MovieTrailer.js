import React from 'react';
import {Link} from "react-router-dom"
import movies from "../Data"
import YouTube from 'react-youtube'


export const MovieTrailer = ( props ) => {

    const movieId = Number(props.match.params.id);
  
    const movie = movies.filter(movie => {
        if (movie.id === movieId) {
            return movie;
        }
        return false;
    });

    return (
       
        <div style = {{ backgroundColor:'Black',textAlign: 'center', minHeight: '100vh',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
            
            
            <h1 style={{textTransform: "uppercase",color:"red",fontSize:"50px"}}>{movie[0].name}</h1>
            <YouTube videoId={movie[0].Trailer} style={{borderStyle: "solid", borderColor: "white"}}/>
            <h6 style={{ justifyContent:"center",color:"white" ,fontSize:"25px"}}>{movie[0].description}</h6>
            <Link to="/" style={{backgroundColor:"black", fontSize:"40 px"}}> Home Page</Link>
        </div>
        );

}
