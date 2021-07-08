import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

class SearchAlbums extends Component {
    state = {
        albums: [],
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
        const search = this.props.match.params.name;
        fetch(`/api/search/albums/${search}?page=${pageNumber}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    albums: result.data,
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
                <h1 className="text-center mb-5">Liste des albums contenant le(s) terme(s) {this.props.match.params.name}</h1>
                <div className="row row-cols-12 row-cols-md-3 g-4">
                    {this.state.albums.map((album) => (
                        <div key={album.id} className="col">
                            <div className="card h-50">
                                <div className="card">
                                    <img src={album.cover_small} className="card-img-top img-fluid"
                                         alt={`Cover de ${album.name}`}/>
                                    <div className="card-body">
                                        <h5 className="card-title"><Link
                                            to={`/albums/${album.id}`}>{album.name}</Link>
                                        </h5>
                                        <p className="card-text">{album.description.substring(0, 40)}...</p>
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

export default SearchAlbums;
