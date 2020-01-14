import React from "react";
import { Provider } from "react-redux";
// import middlewareStore from "./components/AgeMiddlewareStore";
//import store from "./components/AgeStore";
//import thunkStore from "./components/AgeThunkMiddlewareStore";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import IncrementContainer from "./components/IncrementContainer";
// import MovieManager from "./redux/Movie/MovieManager";
import MovieContainer from "./components/MovieContainer";
//import store from "./components/AgeStore";
import store from "./redux/MovieStore";
import Album from "./components/Album";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <IncrementContainer />
        <hr></hr>
        <MovieContainer />
        <Album />
      </div>
    </Provider>
  );
}

export default App;
