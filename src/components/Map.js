import React, {useEffect, useState} from 'react'
import MovieForm from './MovieForm';
import Movies from './Movies';

export default function Map() {
    const [movies, setMovies] = useState([
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
    ]);

    const renderMovies = movies.map((movie, index) => {
        return (<Movies movie={movie} key={index}/>);
    })

    const onSubmitAddMovie = (movie) => { // movie 객체 받아오기
        setMovies([
            ...movies, 
            movie
        ]) 
    }

    return (
        <div>
            <h1>Movie List</h1>
            <MovieForm onSubmitAddMovie={onSubmitAddMovie} />
            {renderMovies}
        </div>
    )
}
