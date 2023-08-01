import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fakeUserData } from "../api";
import { addUser, deleteUser } from "../store/slices/userSlices";
import ShowAllUser from "./ShowAllUser";

function ContainerExample() {
  const dispatch = useDispatch();
  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  const clearUsers = () => {
    dispatch(deleteUser());
  };

  return (
    <>
      <Container className="bg-dark text-white mt-5 rounded-3 p-3 ">
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-around">
              <h2 className="text-capitalize">list of users</h2>
              <button
                className="btn btn-primary d-flex align-item-center justify-content-center"
                style={{ width: "4rem" }}
                onClick={() => addNewUser(fakeUserData())}
              >
                add
              </button>
            </div>
          </Col>
        </Row>
        <Row>
          <ShowAllUser />
        </Row>
      </Container>
      <div className="d-flex align-item-center justify-content-center mt-3">
        <button
          className="btn btn-primary d-flex align-item-center justify-content-center"
          style={{ width: "6rem" }}
          onClick={clearUsers}
        >
          Delete All
        </button>
      </div>
    </>
  );
}

export default ContainerExample;
