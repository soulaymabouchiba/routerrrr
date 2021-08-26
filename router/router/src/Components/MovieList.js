import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({movies, FilterTitel, FilterRating }) => {
    return (
        <div style={{display:"flex" ,flexWrap:"wrap" , backgroundColor:"black",margin:'70px',justifyContent:'space-between' }}>
            {movies
            
          .filter((movie)=>
           
           movie.name.toLowerCase().trim().includes(FilterTitel.toLowerCase().trim())&&
           movie.rating >= FilterRating
            
           )
        
            .map((movie)=>(
                <MovieCard movie={movie} key={movie.id}/>
            )
            )}
        </div>
    )
}