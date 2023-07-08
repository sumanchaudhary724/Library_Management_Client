import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

export const BurrowTable = () => {
  const { burrows } = useSelector((state) => state.burrowInfo);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Burrowed by</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} width="150px" alt="" />
              </td>
              <td>{item.bookName}</td>
              <td>{item.userName}</td>
              <td>{item.dueDate?.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
