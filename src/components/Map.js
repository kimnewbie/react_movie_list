import React, {useEffect, useState} from 'react'
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

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');

    const renderMovies = movies.map((movie, index) => {
        return (<Movies movie={movie} key={index}/>);
    })

    const onSubmitAddMovie = (e) => {
        e.preventDefault();
        // movies.push({ title: movieTitle, year: movieYear })
        setMovies([
            ...movies, 
            {
                title: movieTitle,
                year: movieYear
            }
        ])
        setMovieTitle('');
        setMovieYear('');
    }

    useEffect(() => {}, [])

    return (
        <div>
            <h1>Movie List</h1>
            <form onSubmit={onSubmitAddMovie}>
                <input
                    type="text"
                    value={movieTitle}
                    placeholder="영화 제목"
                    onChange={e => setMovieTitle(e.target.value)}/><br/>
                <input
                    type="text"
                    value={movieYear}
                    placeholder="개봉 년도"
                    onChange={e => setMovieYear(e.target.value)}/><br/>
                <button type="submit">영화 추가</button>
            </form>
            {renderMovies}
        </div>
    )
}
