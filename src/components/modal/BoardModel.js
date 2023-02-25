import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Win from "./Win";
function BoardModel({ show, onHide, ReloadHandeler }) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ borderBottom: 0 }}></Modal.Header>
        <Modal.Body className="p-0">
          <Win />
        </Modal.Body>
        <Modal.Footer style={{ borderTop: 0, justifyContent: "center" }}>
          <Button
            className="btn-modal  mb-3"
            style={{ background: "#cc5252", borderColor: "#cc5252" }}
            onClick={onHide}
          >
            Quit
          </Button>
          <Button
            className="btn-modal mb-3"
            style={{ background: "#218fad", borderColor: "#218fad" }}
            onClick={ReloadHandeler}
          >
            Next Round
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default BoardModel;
