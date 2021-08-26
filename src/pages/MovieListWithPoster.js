import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import './MovieListWithPoster.css';

const Movie = ({
    id,
    year,
    title,
    summary,
    poster,
    genres
}) => {
    return (
        <div className="movie_list" key={id}>
            <div className="movie_poster">
                <img src={poster} alt={title} />
            </div>
            <div className="movie_contents">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">{
                    genres.map(
                        (genre, index) => <li className="genres_list" key={index}>{genre}</li>
                    )
                }</ul>
                <span className="movie_summary">{summary}</span>
            </div>
        </div>
    );
}

export default function MovieListWithPoster() {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // setTimeout 연습
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    });

    useEffect(() => {
        const getMovieList = async () => {
            const result = await axios.get('https://yts-proxy.now.sh/list_movies.json');
            const movieList = result
                .data
                .data
                .movies
                .map(list => (list)) // const result = const{data:{data:{movies}}}
            setMovies(movieList)
            setIsLoading(false)
            console.log(movies)
        }
        getMovieList();
    }, [])

    return (
        <div className="whole_container">
            <div className='movies_container'>
                {
                    isLoading
                        ? <div className="loader">
                            <span className="loader_text">"로딩중..."</span>
                        </div>
                        : <div className="movies_container">
                            {
                                movies.map((movie) => {
                                    return (
                                        <Movie
                                            key={movie.id}
                                            id={movie.id}
                                            year={movie.year}
                                            title={movie.title}
                                            summary={movie.summary}
                                            genres={movie.genres}
                                            poster={movie.medium_cover_image} />
                                    );
                                })
                            }
                        </div>
                }
            </div>
        </div>
    )
}