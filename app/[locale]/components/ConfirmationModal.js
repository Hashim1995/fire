import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
} from "reactstrap";

const ConfirmationModal = ({
  isOpen,
  toggle,
  title = "Confirmation",
  content = "Are you sure you want to proceed?",
  okText = "OK",
  closeText = "Cancel",
  onConfirm,
  onCancel,
  loading = false,
  disabled = false,
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        <div className="d-flex gap-2 items-center">
          <Button outline onClick={onCancel || toggle}>
            {closeText}
          </Button>
          <Button
            color="primary"
            onClick={onConfirm}
            disabled={loading || disabled}
            className="theme-btn border-0 rounded-0 btn-style-one"
          >
            <span className="btn-title text-white">
              {loading ? (
                <Spinner
                  style={{ width: "0.7rem", height: "0.7rem" }}
                  type="grow"
                  color="light"
                />
              ) : (
                okText
              )}
            </span>
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
