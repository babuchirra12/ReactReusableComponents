import React from 'react'
import Modal from 'react-bootstrap/Modal';

function ModalComponent({smShow,onHide,dialogClassName,children,ModalTitle}) {
    return (
        <>
        
        <Modal
        animation='true'
        size="sm"
        show={smShow}
        onHide={onHide}
        dialogClassName={dialogClassName}
        aria-labelledby="example-modal-sizes-title-sm"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {ModalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
     
        </>
    )
}

export default ModalComponent
