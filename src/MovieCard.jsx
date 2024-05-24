import React from 'react';
import './App.css';

//instead of using props and calling Props.movie1.Title, Props.movie1.Year, etc we pass movie1 as the argument to the function and use it directly
const MovieCard =({movie})=> {

    return(
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https.placeholder.com/400'} alt={movie.Title}/>
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );

}
 export default MovieCard;