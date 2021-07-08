import React, {Component} from 'react';
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";

class SearchGenres extends Component {
    state = {
        genres: [],
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
        fetch(`/api/search/genres/${search}?page=${pageNumber}`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                this.setState({
                    genres: result.data,
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
                <h1 className="text-center mb-5">Liste des genres contenant le(s) terme(s) {this.props.match.params.name}</h1>
                <div className="row row-cols-12 row-cols-md-3 g-4">
                    {this.state.genres.map((genre) => (
                        <div key={genre.id} className="col">
                            <div className="card h-50">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title"><Link
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

export default SearchGenres;
