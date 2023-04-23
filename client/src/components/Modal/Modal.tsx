import * as React from "react";
import Modal from "react-modal";
import {ModalProps} from "../../types/ModalTypes";

function ModalComponent({ isOpen, children, className, overlayClassName }: ModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            className={className}
            overlayClassName={overlayClassName}
        >
            {children}
        </Modal>
    );
}

export default ModalComponent;