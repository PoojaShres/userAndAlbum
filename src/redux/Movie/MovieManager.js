import React, { Component } from "react";
import MovieList from "./MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

import uuid from "uuid";

class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      movieName: "",
      id: uuid(),
      editMovie: false
    };
  }
  onChange = event => {
    this.setState({ movieName: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const newMovie = {
      id: this.state.id,
      movieTitle: this.state.movieName
    };

    const updatedMovieList = [...this.state.movies, newMovie];
    this.setState({
      movies: updatedMovieList,
      movieName: "",
      id: uuid(),
      editMovie: false
    });
  };

  handleDelete = id => {
    const filterMovie = this.state.movies.filter(movie => movie.id !== id);
    this.setState({
      movies: filterMovie
    });
  };

  clearList = () => {
    this.setState({
      movies: []
    });
  };

  handleEdit = id => {
    const filterMovie = this.state.movies.filter(movie => movie.id !== id);
    const movieToEdit = this.state.movies.find(movie => movie.id === id);
    this.setState({
      movies: filterMovie,
      movieName: movieToEdit.movieTitle,
      id: id,
      editMovie: true
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className='col-10 mx-auto col-md-8 mt-4"'>
            <h3>Add movies recently watched</h3>
            <br></br>
            <div className="card card-body my-3">
              <form onSubmit={this.onSubmit}>
                <div className="input-group">
                  <i className="fas fa-film"></i>
                  <input
                    type="text"
                    className="form-control text-capitalize"
                    placeholder="Add a Movie Name"
                    value={this.state.movieName}
                    onChange={this.onChange}
                  ></input>
                  <button
                    type="submit"
                    className={
                      this.state.editMovie
                        ? "btn btn-block btn-success mt-3"
                        : "btn btn-block btn-primary mt-3"
                    }
                  >
                    {this.state.editMovie ? "EDIT MOVIE" : "ADD MOVIE"}
                  </button>
                </div>
              </form>
            </div>
            <MovieList
              movies={this.state.movies}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieContainer;
