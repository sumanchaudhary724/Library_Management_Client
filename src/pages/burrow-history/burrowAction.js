import { toast } from "react-toastify";
import { fetchBurrow, postBurrow, returnBurrow } from "../../helper/axios.js";
import { fetchBookAction } from "../books/bookAction.js";
import { setBurrow } from "./burrowSlice.js";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //fetch user burrow
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, message, burrowHistory } = await fetchBurrow();
  console.log(status, message);
  dispatch(setBurrow(burrowHistory));
};

export const returnBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await returnBurrow(obj);

  if (status === "success") {
    //fetch user burrow

    dispatch(fetchBurrowAction());
    dispatch(fetchBookAction());
  }
};
