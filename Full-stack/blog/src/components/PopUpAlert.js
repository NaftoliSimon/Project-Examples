import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalBody from './Header&Footer/Login/LoginModalBody'

export default function PopUpAlert({show, onHide, color = 'danger'}) {
//This component may work, but is NOT complete (needs to be tested and formatted)
    const bgColor = `bg-${color}`;
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton className={bgColor}>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body className={bgColor}>
      <p className={bgColor}>No Access To The Server</p>
      </Modal.Body>
      
    </Modal>
  )
}
