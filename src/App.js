import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieForm from './components/MovieForm';
import Users from './pages/Users';
import Home from './pages/Home';
import Movies from './pages/Movies';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="container">
                    <Switch>
                        <Route path="/movies">
                            <Movies />
                        </Route>
                        <Route path="/" exact="exact">
                           <Home />
                        </Route>
                        <Route path="/users">
                            <Users/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
