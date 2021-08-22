import React, {useState} from 'react'
import InputField from './InputField';

export default function MovieForm({onSubmitAddMovie}) {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle('');
        setMovieYear('');
    };

    const validateForm = () => {
        let validated = true;

        if (!movieTitle) {
            setTitleError('영화제목을 넣어주세요');
            validated = false;
        }
        if (!movieYear) {
            setYearError('개봉년도를 넣어주세요');
            validated = false;
        }
        return validated;
    }

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            onSubmitAddMovie({id: Date.now(), title: movieTitle, year: movieYear});
            resetErrors();
            resetForm();
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <InputField 
                type="text"
                value={movieTitle} 
                placeholder="영화 제목"
                onChange={e => setMovieTitle(e.target.value)}
            />
            <div className="error">{titleError}</div>
            <InputField 
                type="number"
                value={movieYear} 
                placeholder="개봉 년도"
                onChange={e => setMovieYear(e.target.value)}
            /> 
            <div className="error">{yearError}</div>
            <button type="submit">영화 추가</button>
        </form>
    )
}
