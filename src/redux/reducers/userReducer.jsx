import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types/user";

const initialState = {
  data: null,
  loading: false,
  errors: [],
  message: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, data: action.payload, errors: [] };
    case LOGIN_FAILURE:
      return { ...state, loading: false, errors: action.errors };

    default:
      return state;
  }
};

export default userReducer;