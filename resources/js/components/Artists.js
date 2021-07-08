import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

class Artists extends Component {
    state = {
        artists: [],
        current_page: 1,
        per_page: 50,
        total: 50
    }

    componentDidMount() {
        this.getApi(this.state.current_page)
    }

    handlePageChange(pageNumber) {
        this.getApi(pageNumber);
    }

    getApi(pageNumber) {
        fetch(`/api/artists?page=${pageNumber}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    artists: result.data,
                    current_page: result.current_page,
                    per_page: result.per_page,
                    total: result.total
                })

            })
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-center my-5">
                    <Pagination
                        pageRangeDisplayed={10}
                        activePage={this.state.current_page}
                        itemsCountPerPage={this.state.per_page}
                        totalItemsCount={this.state.total}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                        firstPageText="Début"
                        lastPageText="Fin"
                    />
                </div>
                <h1 className="text-center mb-5">Liste des artistes</h1>
                <div className="row row-cols-12 row-cols-md-3 g-4">
                    {this.state.artists.map((artist) => (
                        <div key={artist.id} className="col">
                            <div className="card h-50">
                                <div className="card">
                                    <img src={artist.photo} className="card-img-top img-fluid"
                                         alt={`Photo de ${artist.name}`}/>
                                    <div className="card-body">
                                        <h5 className="card-title"><Link
                                            to={`/artists/${artist.id}`}>{artist.name}</Link>
                                        </h5>
                                        <p className="card-text">{artist.description.substring(0, 40)}...</p>
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

export default Artists;
