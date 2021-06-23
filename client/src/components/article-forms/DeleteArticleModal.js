import Backdrop from "../ui/Backdrop";
import Modal from "../ui/Modal";
import ReactDOM from "react-dom";
import Button from "../ui/Button";

const DeleteArticleModal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onDeleteCancel}/>, portalElement)}
      {ReactDOM.createPortal(<Modal>
          <h3>Delete Article</h3>
          <p>Do you really want to delete article: {props.articleName}</p>
          <Button margin="1em" onClick={props.onDelete}>Ok</Button>
          <Button margin="1em" onClick={props.onDeleteCancel}>Cancel</Button>
      </Modal>, portalElement)}
    </>
  );
};

export default DeleteArticleModal;
