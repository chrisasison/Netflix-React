import React, { useState, useEffect } from 'react'
import './Row.css';
import axios from './axios';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            console.log(request);
            return request;
        }
        fetchData();
    }, []);

    return (
        <div className="row">
            <h2>{title}</h2>
            {/* container -> movie cover */}
        </div>
    )
}

export default Row
