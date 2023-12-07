import { REGISTRAZIONE_OK } from "../actions";

const initialState = {
  registrationData: null,
};

const registrazioneReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRAZIONE_OK:
      return {
        ...state,
        registrationData: action.payload,
      };

    default:
      return state;
  }
};

export default registrazioneReducer;
