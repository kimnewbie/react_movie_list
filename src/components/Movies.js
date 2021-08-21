import React from 'react'

export default function Movies({movie}) {
    return (
        <div className="movie">
            <div className="movie-title"> {movie.title} </div>
            <div className="movie-year"> {movie.year} </div>
        </div>
    )
}