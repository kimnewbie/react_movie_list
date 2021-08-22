import React, {useEffect, useState} from 'react'
import MovieForm from './MovieForm';
import Movies from './Movies';

export default function Map() {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(
            movies.filter(movie => {
                return movie.id !== id
            })
        )
    }

    const renderMovies = movies.length ? movies.map((movie) => {
        return (
        <Movies
            movie={movie}  
            key={movie.id}
            removeMovie={removeMovie}
        />
        );
    }) : '추가된 영화가 없습니다.';

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
