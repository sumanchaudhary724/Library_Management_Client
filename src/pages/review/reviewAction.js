import { getReviews, postReview, updateReviews } from "../../helper/axios";
import { toast } from "react-toastify";
import { fetchBurrowAction } from "../burrow-history/burrowAction";
import { setModalShow } from "../../system/systemSlice";
import { setReviews } from "./reviewSlice";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);

  toast[status](message);

  if (status === "success") {
    //refetch all the burrow history
    dispatch(setModalShow(false));
    dispatch(fetchBurrowAction());
    dispatch(fetchReviewAction());
  }
};

export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await getReviews();

  if (status === "success") {
    //refetch all the burrow history
    dispatch(setReviews(reviews));
  }
};

export const updateReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await updateReviews(obj);
  toast[status](message);
  if (status === "success") {
    //refetch all the burrow history
    dispatch(fetchReviewAction());
  }
};
