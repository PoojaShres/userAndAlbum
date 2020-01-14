import { createStore } from "redux";
//import MovieReducer from "../redux/Movie/MovieReducer";
import rootReducer from "../redux/Age/rootReducer";


const store = createStore(rootReducer);

export default store;
