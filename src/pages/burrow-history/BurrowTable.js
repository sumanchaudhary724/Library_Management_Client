import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { fetchBurrowAction, returnBurrowAction } from "./burrowAction";
import { ReviewForm } from "../../components/review/ReviewForm";
import { CustomModal } from "../../components/modal/CustomModal";
import { setModalShow } from "../../system/systemSlice";
import { useDispatch } from "react-redux";
export const BurrowTable = () => {
  const dispatch = useDispatch();
  const [selectedReview, setSelectedReview] = useState({});
  const { burrows } = useSelector((state) => state.burrowInfo);
  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    dispatch(fetchBurrowAction());
  }, [dispatch]);

  const handleOnBurrowReturn = ({ bookId, _id }) => {
    if (window.confirm("Are you sure you want to return this book?")) {
      const obj = { bookId, burrowId: _id };

      dispatch(returnBurrowAction(obj));
    }
  };

  const handleOnReview = (burrowBook) => {
    setSelectedReview(burrowBook);
    dispatch(setModalShow(true));
  };

  return (
    <>
      {selectedReview?._id && (
        <CustomModal modalTitle="Leave your review">
          <ReviewForm selectedReview={selectedReview} />
        </CustomModal>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Burrowed by</th>
            <th>Due Date</th>
            <th>Returned Date</th>
          </tr>
        </thead>
        <tbody>
          {burrows?.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate?.slice(0, 10)}</td>
              <td>{item.returnDate?.slice(0, 10)}</td>
              <td>
                {item.userId === user._id && !item.isRetured ? (
                  <Button
                    variant="primary"
                    onClick={() => handleOnBurrowReturn(item)}
                  >
                    Return
                  </Button>
                ) : item?.reviewGiven ? (
                  "review Given"
                ) : (
                  <Button
                    variant="success"
                    onClick={() => handleOnReview(item)}
                  >
                    Leave review
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
