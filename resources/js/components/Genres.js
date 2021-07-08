import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Genres extends Component {
    state = {
        genres: [],
    }

    async componentDidMount() {
        fetch(`/api/genres`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    genres: result.data,
                })

            })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center mb-5">Liste de genres musicaux</h1>
                <div className="row row-cols-12 row-cols-md-3 g-4">
                    {this.state.genres.map((genre) => (
                        <div key={genre.id} className="col">
                            <div className="h-50">
                                <div className="card text-dark bg-light">
                                    <div className="card-body">
                                        <h5 className="card-title text-center"><Link
                                            to={`/genres/${genre.id}`}>{genre.name}</Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Genres;
