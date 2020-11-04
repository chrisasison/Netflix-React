import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchURL, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__covers">
                {movies.map((movie) => {
                    const handleMovieSelection = () => {
                        //take movie.original_name and search for youtube video
                        console.log(movie.original_name);
                    }
                    return <img
                        onClick={handleMovieSelection}
                        key={movie.id}
                        className={`row__cover ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        />
                })}
            </div>
            {/* container -> movie cover */}
        </div>
    )
}

export default Row
