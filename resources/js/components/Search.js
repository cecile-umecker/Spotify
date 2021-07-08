import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Search extends Component {

    handleChange = (e) => {
        this.setState({value: e.target.value});
        clearTimeout(this.typingTimer);
        this.typingTimer = setTimeout(() => {
            if (e.target.value) {
                this.componentDidMount()
            }
        }, 300);
    };

    state = {
        artists: [],
        albums: [],
        genres: [],
        value: ''
    }

    async componentDidMount() {
        const search = this.state.value;

        fetch(`/api/search/all/${search}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    artists: result.artists,
                    albums: result.albums,
                    genres: result.genres,
                })
            })
    }

    render() {
        return (
            <div className="container">
                <input
                    className="form-control me-2"
                    type="text"
                    value={this.state.value}
                    placeholder="Rechercher"
                    onChange={this.handleChange}
                />
                <div className="row">
                    <div className="col-6">
                        <h1>Liste des artistes</h1><Link
                        to={`/search/artists/${this.state.value}`}><span className="h5">Voir tout</span></Link>
                        {this.state.artists.map((artist) => (
                            <div  key={artist.id}>
                                <img src={artist.photo}
                                     alt={`Cover de ${artist.name}`}/>
                                <div>
                                    <h5><Link
                                        to={`/artists/${artist.id}`}>{artist.name}</Link>

                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-6">
                        <h1 className="float-left">Liste des albums</h1>
                        <Link
                            to={`/search/albums/${this.state.value}`}><span className="h5">Voir tout</span></Link>
                        {this.state.albums.map((album) => (
                            <div  key={album.id}>
                                <img src={album.cover_small}
                                     alt={`Cover de ${album.name}`}/>
                                <div>
                                    <h5><Link
                                        to={`/albums/${album.id}`}>{album.name}</Link>

                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12">
                        <h1>Liste des genres</h1><Link
                        to={`/search/genres/${this.state.value}`}><span className="h5">Voir tout</span></Link>
                        {this.state.genres.map((genre) => (
                            <h5 key={genre.id}><Link
                                to={`/genres/${genre.id}`}>{genre.name}</Link>
                            </h5>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
