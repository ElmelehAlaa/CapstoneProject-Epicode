import { GET_MEMBERS } from "../actions";

const initialState = {
  content: [],
};

const membersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        content: action.payload,
      };
    default:
      return state;
  }
};
export default membersReducer;
