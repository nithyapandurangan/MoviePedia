import React from "react";
import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//API KEY-453d64e6
const API_URL = 'https://www.omdbapi.com/?apikey=453d64e6';
// const movie1 = 
//     {
//         "Title": "Barbie: The Princess & the Popstar",
//         "Year": "2012",
//         "imdbID": "tt2396690",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BNDRmMWU2ZjMtM2NlMy00OThkLTgwNDgtYTFkOGZmMGY2MzZmXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
//     }

const App=()=>{
    //useState hook is used to set the state of the movies variable
    //The movies variable is initialized as an empty array
    //The setMovies function is used to update the state of the movies variable
    //The setMovies function is passed to the MovieCard component as a prop
    //When you call useState, it returns an array with two elements: current state value (movies) and a function that lets you update it (setMovies)

    const[movies,setMovies]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //fetching movie data based on title using 'fetch' api and logs the response

    //'searchMovies' function is an async function which takes a 'title' as an argument
    //fetch API is used to make a GET request to the API_URL with the query parameter s set to the title.
    //The response is then converted to JSON format and stored in the 'data' variable
    //The data is then logged to the console
    const searchMovies= async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{ 
        searchMovies('Barbie');
    }, []);

    const handleTitleClick = () => {
        setSearchTerm('');
        searchMovies('Barbie');
    };

    return(
            <div className="app">
                 <h1 onClick={handleTitleClick} style={{ cursor: 'pointer' }}>MoviePedia</h1>
                <div className="search">
                    <input placeholder="Search for movies" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}/>

                    <img src={SearchIcon} 
                    alt="search" 
                    onClick={()=> searchMovies(searchTerm)}/>

                </div>

                {
                    movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2> No movies found</h2>
                        </div>
                    )
                }

            </div>
            );
}

export default App;