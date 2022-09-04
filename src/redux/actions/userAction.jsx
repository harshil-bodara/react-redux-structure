import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../types/user";
import Axios from "../../api";

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
const loginFailer = (errors) => ({ type: LOGIN_FAILURE, errors });

export const userLogin = () => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await Axios.post("/api/login");
    if (response?.status === 200) {
      return dispatch(loginSuccess(response?.data));
    }
    return dispatch(loginFailer(response?.data?.message));
  } catch (e) {
    return dispatch(loginFailer(e));
  }
};