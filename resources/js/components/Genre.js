import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Genre extends Component {
    state = {
        album: [],
        genre: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`/api/genres/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    genre: result,
                    album: result.album
                })
            })
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center">{this.state.genre.name}</h1>
                <h3>Albums</h3>
                {this.state.album.map((album) => (
                    <Link to={`/albums/${album.id}`}>
                        <img key={album.id} src={album.cover_small} className="img-fluid"
                             alt={`Cover de ${album.name}`}/></Link>
                ))}


            </div>
        );
    }
}

export default Genre;
