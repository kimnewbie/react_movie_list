import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';
import User from './pages/User';
import MovieListWithPoster from './pages/MovieListWithPoster';

export default [
    {
        path: '/',
        component: Home
    }, {
        path: '/movies',
        component: Movies
    }, {
        path: '/movieList',
        component: MovieListWithPoster
    }, {
        path: '/users',
        component: Users
    }, {
        path: '/users/:id',
        component: User
    }
]