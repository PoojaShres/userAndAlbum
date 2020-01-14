import { createStore, applyMiddleware } from "redux";
import { AgeReducer } from "../redux/Age/AgeReducer";
import thunk from "redux-thunk";

const thunkStore = createStore(AgeReducer, applyMiddleware(thunk));

export default thunkStore;
