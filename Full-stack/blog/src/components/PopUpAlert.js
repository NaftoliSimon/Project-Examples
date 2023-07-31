import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function PopUpAlert({show, onHide, title, text, color = 'danger'}) {
//This component may work, but is NOT complete (needs to be tested and formatted)
    const bgColor = `bg-${color}`;
  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton className={`${bgColor} border-0`}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${bgColor} border-0`}>
      <p className={bgColor}>{text}</p>
      </Modal.Body>
      <Modal.Footer className={`${bgColor} border-0`}>
        <Button onClick={onHide} className={`buttonp;ll`}>Close</Button>
      </Modal.Footer>
      
    </Modal>
  )
}
