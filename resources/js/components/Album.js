import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Album extends Component {
    state = {
        album: [],
        artist: [],
        track: []
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`/api/albums/${id}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    album: result,
                    artist: result.artist,
                    track: result.track
                })
            })
    }

    render() {

        return (
            <div className="container">
                <h1 className="text-center">{this.state.album.name} ({this.state.album.release_year})</h1>
                <img src={this.state.album.cover} className="img-fluid d-flex rounded mx-auto d-block" />
                <h2>Description</h2>
                <p> {this.state.album.description}</p>
                <h2>Tracks</h2>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Écouter</th>
                            <th scope="col">Durée</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.track.map((track) => (
                        <tr key={track.id}>
                            <th scope="row">{track.track_no}</th>
                            <td>{track.name}</td>
                            <td> <ReactAudioPlayer
                                src={track.mp3}
                                AutoPlay
                                onCanPlay
                                controls
                            /></td>
                            <td>{track.duration_format}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Album;
