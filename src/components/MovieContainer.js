import React, { Component } from "react";
// import MovieList from "../redux/Movie/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

import { addMovie, delMovie, clearList } from "../redux/Movie/MovieAction";
import { connect } from "react-redux";

//import uuid from "uuid";

const MovieofList = props => (
  <div>
    <h3 className="text-capitalize text-center">
      List Of Movies You have Recently watched
    </h3>
    {props.movies.map((movie, i) => (
      <li
        key={i}
        className="list-group-item text-capitalize d-flex justify-content-between my-2"
      >
        <span>{movie.movieName}</span>
        <button
          className="mx-2 text-danger"
          onClick={event => {
            event.preventDefault();
            props.onDeleteMovie(movie.id);
          }}
        >
          Delete
        </button>
      </li>
    ))}
    <button
      type="button"
      className="btn btn-block btn-danger text-capitalize mt-5"
      onClick={evt => {
        evt.preventDefault();
        props.onClearList();
      }}
    >
      {" "}
      Clear List{" "}
    </button>
  </div>
);
class MovieContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieName: ""
    };
  }
  handleMovie = () => {
    const movieName = this.state.movieName;
    this.props.onAddMovie(movieName);
    this.setState({
      movieName: ""
    });
  };
  render() {
    return (
      <div>
        <div className="card card-body my-3">
          <input
            type="text"
            value={this.state.movieName}
            onChange={event => this.setState({ movieName: event.target.value })}
          ></input>
          <br></br>
          <button onClick={movieName => this.handleMovie(movieName)}>
            Add
          </button>
        </div>
        <MovieofList
          movies={this.props.movies}
          onDeleteMovie={movieId => this.props.onDelete(movieId)}
          onClearList= {()=> this.props.onClearList()}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: [...state.movieReducer.movies]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddMovie: movieName => dispatch(addMovie(movieName)),
    onDelete: movieId => dispatch(delMovie(movieId)),
    onClearList: ()=> dispatch(clearList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
