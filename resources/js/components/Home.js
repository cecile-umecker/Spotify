import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {

    state = {
        albums: []
    }

    async componentDidMount() {
        fetch(`/api/albums/random`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    albums: result
                })
            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">Bienvenue sur rushSpotify</h1>
                {this.state.albums.map((album) => (
                    <Link to={`/albums/${album.id}`}>
                        <img src={album.cover_small} className="img-fluid"
                             alt={`${album.name}`}/></Link>
                ))}
            </div>
        );
    }
}

export default Home;
