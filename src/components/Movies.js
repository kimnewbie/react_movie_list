import React from 'react'

export default function Movies({movie, removeMovie}) { 
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">
                    {movie.year}
                </span>
            </div>
            <div>
                <button onClick={()=>removeMovie(movie.id)}>삭제</button>
            </div>
        </div>
    )
}