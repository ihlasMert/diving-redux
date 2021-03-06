import { createStore } from "redux";

const INITIAL_STATE = { counter: 0, showCounter: true };

const counterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decerement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      showCounter: !state.counter,
      counter: state.counter,
    };
  }
  return state;
};
const store = createStore(counterReducer);
export default store;
