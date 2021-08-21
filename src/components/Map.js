import React from 'react'
import Movies from './Movies';

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
            <Movies movie={movie} key={index}/>
        );
    })
        
    return (
        <div>
            <h1>Movie List</h1>
            {renderMovies}
        </div>
    )
}
