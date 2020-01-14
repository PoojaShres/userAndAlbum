import { createStore } from "redux";
import rootReducer from "../redux/Age/rootReducer";
// import { AgeReducer } from "../redux/Age/AgeReducer";
// import MovieReducer  from "../redux/Movie/MovieReducer";

const store = createStore(rootReducer);

export default store;
