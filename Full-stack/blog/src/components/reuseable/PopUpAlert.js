import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { pillButtonSolid } from '../../data/Bootstrap/pillButton';

export default function PopUpAlert({ show, setShow, title, text, color = 'danger' }) {
  //This component may work, but is NOT complete (needs to be tested and formatted)
  const bgColor = `bgColor-primary`;
  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg">
      <Modal.Header closeButton className={`${bgColor} border-0`}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${bgColor} border-0`}>
        <p className={bgColor}>{text}</p>
      </Modal.Body>
      <Modal.Footer className={`${bgColor} border-0`}>
        <Button onClick={() => setShow(false)} className={pillButtonSolid}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}
