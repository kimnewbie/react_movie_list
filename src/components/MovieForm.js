import React, {useState} from 'react'

export default function MovieForm({onSubmitAddMovie}) { 

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitAddMovie({
            id: Date.now(),
            title: movieTitle,
            year: movieYear
        }) 
        resetForm();
    }

    return (
        <form onSubmit={onSubmit}>
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
    )
}
