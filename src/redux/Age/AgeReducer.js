import {
  AGE_VALUE_INCREMENT,
  AGE_VALUE_DECREMENT,
  AGE_VALUE_DELETE
  //LOADING
} from "./AgeType";

const initialState = {
  ageValue: 20,
  history: []
};

export const AgeReducer = (state = initialState, action) => {
  switch (action.type) {
    case AGE_VALUE_INCREMENT:
      return {
        ...state,
        ageValue: state.ageValue + action.value,
        loading: false,
        history: state.history.concat({
          id: Math.random(),
          ageValue: state.ageValue + action.value
        })
      };
    case AGE_VALUE_DECREMENT:
      return {
        ...state,
        ageValue: state.ageValue - action.value,
        history: state.history.concat({
          id: Math.random(),
          ageValue: state.ageValue - action.value
        })
      };

    case AGE_VALUE_DELETE:
      return {
        ...state,
        history: state.history.filter(element => element.id !== action.payload)
      };

      
    // case LOADING:
    //   return {
    //     loading: true
    //   };

    default:
      return state;
  }
};
