import React, { Component } from "react";

class MovieList extends Component {
  render() {
    const { movies, clearList, handleDelete,handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Movie List </h3>
        {movies.map(movie => {
          return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
              <h6>{movie.movieTitle}</h6>
              <div className="todo-icon">
              <span className="mx-2 text-danger">
                  <i
                    className="fas fa-trash"
                    onClick={() => handleDelete(movie.id)}
                  ></i>
              </span>
              <span className="mx-2 text-success">
                  <i
                    className="fas fa-pen"
                    onClick={() => handleEdit(movie.id)}
                  ></i>
              </span>
              </div>
           </li>
          );
        })}
        <button
          type="button"
          className="btn btn-block btn-danger text-capitalize mt-5"
          onClick={clearList}
        >
          clear List
        </button>
      </ul>
    );
  }
}


export default MovieList;
