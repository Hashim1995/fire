import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ProvideModal = ({ setModal, modal }) => {
    return (<Modal
        className="modal-dialog-centered"
        size="lg"
        centered
        backdrop="static"
        scrollable={true}
        isOpen={modal}
        toggle={() => setModal((z) => !z)}
    >

        <ModalHeader toggle={() => setModal((z) => !z)}>
            TƏLƏB OLUNAN SƏNƏDLƏRİN ƏLAVƏ EDİLMƏSİ
        </ModalHeader>
        <ModalBody>
            <div className="col-lg-12 gap-3 login-form">

            </div>
        </ModalBody>


    </Modal>
    );
};

export default ProvideModal;
