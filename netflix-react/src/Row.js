import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from './axios';
import Youtube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, fetchURL, isLargeRow }) => {
    const opts = {
        height: "500px",
        width: "75%",
        playerVars: {
            autoplay: 1,
        }
    }
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
                    return <img
                        onClick=""
                        key={movie.id}
                        className={`row__cover ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        />
                })}
            </div>
        </div>
    )
}

export default Row
