import React from 'react'
import Add from './Add'
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieList = ({movies,addMovie}) => {
    return (
        <div>
            <Add addMovie={addMovie}/>
           {movies.map(el => 
           <MovieCard movie={el}/>)}
        </div>
    )
}

export default MovieList
