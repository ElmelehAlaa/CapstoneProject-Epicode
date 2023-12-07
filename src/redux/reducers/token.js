import { TOKEN } from "../actions";

const initialState = {
  content: null,
};
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};
export default tokenReducer;
