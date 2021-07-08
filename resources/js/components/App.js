import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Artists from './Artists';
import Artist from './Artist';
import Albums from './Albums';
import Album from './Album';
import Genres from './Genres';
import Genre from './Genre';
import Search from './Search';
import SearchArtists from './search/SearchArtists';
import SearchAlbums from './search/SearchAlbums';
import SearchGenres from './search/SearchGenres';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-primary bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Accueil </Link></li>
                            <li><Link to={'/search'} className="nav-link">Rechercher</Link></li>
                            <li><Link to={'/artists'} className="nav-link">Artistes</Link></li>
                            <li><Link to={'/albums'} className="nav-link">Albums</Link></li>
                            <li><Link to={'/genres'} className="nav-link">Genres</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/artists' component={Artists}/>
                        <Route exact path='/artists/:id' component={Artist}/>
                        <Route exact path='/albums' component={Albums}/>
                        <Route exact path='/albums/:id' component={Album}/>
                        <Route exact path='/genres' component={Genres}/>
                        <Route exact path='/genres/:id' component={Genre}/>
                        <Route exact path='/search' component={Search}/>
                        <Route exact path='/search/artists/:name' component={SearchArtists}/>
                        <Route exact path='/search/genres/:name' component={SearchGenres}/>
                        <Route exact path='/search/albums/:name' component={SearchAlbums}/>
                        <Route exact path='/search/genres/:name' component={SearchGenres}/>

                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
