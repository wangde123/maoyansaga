import { Map } from "immutable";

const defaultState = Map({
  count: 3,
  list: [],
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add":
      return state.update("count", (v) => v + 1);
    case "minus":
      return state.update("count", (v) => v - 1);
    case "load":
      return state.set("list", action.payload);
    default:
      return state;
  }
};

export default reducer;
