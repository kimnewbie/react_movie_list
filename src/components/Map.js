import React from 'react'

export default function Map() {
    const movies = [
        {
            title: 'WALL-E',
            year: 2008
        }, {
            title: 'Finding Dory',
            year: 2016
        }, {
            title: 'Maleficent: Mistress of Evil',
            year: 2019
        }
    ];

    const renderMovies = movies.map((movie, index)=>{
        return(
            <div className="movie" key={index}>
                <div className="movie-title"> {movie.title} </div>
                <div className="movie-year"> {movie.year} </div>
            </div>
        );
    })
        
    return (
        <div>
            <h1>Movie List</h1>
            {renderMovies}
        </div>
    )
}
