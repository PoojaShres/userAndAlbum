import {
  AGE_VALUE_INCREMENT,
  AGE_VALUE_DECREMENT,
  AGE_VALUE_DELETE
  //LOADING
} from "./AgeType";

// THUNK MIDDLEWARE
//export const ageValueIncrement = val => {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(ageValueIncrementAsync(val));
//     }, 2000);
//   };
// };
// export const ageValueIncrementAsync = val => {
//   return {
//     type: AGE_VALUE_INCREMENT,
//     value: val
//   };
// };

export const ageValueIncrement = val => {
  return {
    type: AGE_VALUE_INCREMENT,
    value: val
  };
};
export const ageValueDecrement = val => {
  return {
    type: AGE_VALUE_DECREMENT,
    value: val
  };
};

export const ageValueDel = id => {
  return {
    type: AGE_VALUE_DELETE,
    payload: id
  };
};

// export const loading = () => {
//   return {
//     type: LOADING
//   };
// };
