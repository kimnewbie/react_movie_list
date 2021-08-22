import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieForm from './components/MovieForm';
import Users from './pages/Users';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path="/movies">
                        <h1>Movie list</h1>
                        <MovieForm/>
                    </Route>
                    <Route path="/" exact>
                        <h1>Home</h1>
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
