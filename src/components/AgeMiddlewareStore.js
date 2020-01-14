import { createStore, applyMiddleware } from "redux";
import { AgeReducer } from "../redux/Age/AgeReducer";

const logAction = middlewareStore => {
  return next => {
    return action => {
      const result = next(action);
      console.log(`Caught in Middle ${JSON.stringify(result)}`);
    };
  };
};
const middlewareStore = createStore(AgeReducer, applyMiddleware(logAction));

export default middlewareStore;
