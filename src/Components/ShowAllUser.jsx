import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/userSlices";
const ShowAllUser = () => {
  const data = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(data);
  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
  };

  return (
    <ul style={{ listStyle: "none" }}>
      {data.map((user, id) => (
        <li key={id} className="  p-1 my-2 rounded-2 bg-light">
          <div className="d-flex align-item-center justify-content-around">
            <span className="text-dark">{user}</span>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => deleteUser(id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowAllUser;
