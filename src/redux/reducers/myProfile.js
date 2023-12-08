import { LOGOUT, MY_PROFILE, UPDATE_PROFILE } from "../actions";

const initialState = {
  myContent: null,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_PROFILE:
      return {
        myContent: action.payload,
      };

    case UPDATE_PROFILE:
      return {
        myContent: action.payload,
      };

    case LOGOUT:
      return {
        myContent: null,
      };

    default:
      return state;
  }
};
export default myProfileReducer;
