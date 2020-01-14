import { combineReducers } from "redux";
//import { AgeIncrementReducer, AgeDecrementReducer } from "./AgeReducer";
import { AgeReducer } from "./AgeReducer";
import MovieReducer from "../Movie/MovieReducer";

const rootReducer = combineReducers({
  // IncrementReducer: AgeIncrementReducer,
  // DecrementReducer: AgeDecrementReducer,
  age: AgeReducer,
  movieReducer: MovieReducer
});

export default rootReducer;
