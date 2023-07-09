import { toast } from "react-toastify";
import { fetchBurrow, postBurrow } from "../../helper/axios.js";
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
  const { status, message, burrows } = await fetchBurrow();
  console.log(status, message);

  dispatch(setBurrow(burrows));
};
