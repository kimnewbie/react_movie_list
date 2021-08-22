import React, {useState} from 'react'
import MovieForm from '../components/MovieForm'
import Movie from '../components/Movie'

export default function Movies() {
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
        <Movie
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
            <h1>Movie list</h1>
            <MovieForm onSubmitAddMovie={onSubmitAddMovie}/>
            {renderMovies} 
        </div>
    )
}
