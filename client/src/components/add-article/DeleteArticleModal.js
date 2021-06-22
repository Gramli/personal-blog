import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import ReactDOM from "react-dom";
import Button from "../ui/Button";

const DeleteArticleModal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.OnCancel}/>, portalElement)}
      {ReactDOM.createPortal(<Modal>
          <h3>Modal</h3>
          <Button>Ahoj</Button>
      </Modal>, portalElement)}
    </>
  );
};

export default DeleteArticleModal;
