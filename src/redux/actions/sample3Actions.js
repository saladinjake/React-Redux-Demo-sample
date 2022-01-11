import axios from "axios";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/sample3Types";

const fetchRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});
const fetchSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

export const getRandomUsers = () => async (dispatch) => {
  dispatch(fetchRequest());
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    //console.log(data)
    const users = data.map((user) => ({ id: user.id }));
    dispatch(fetchSuccess(users));
  } catch (error) {
    console.log(error.message)
    dispatch(fetchFailure(error.message));
  }
};
