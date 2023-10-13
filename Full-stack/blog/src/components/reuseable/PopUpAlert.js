import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { pillButtonSolid } from '../../data/Bootstrap/pillButton';
import DangerIcon from './DangerIcon';
import center from '../../data/Bootstrap/center';

export default function PopUpAlert({ show, setShow, title, text, variant = 'primary' }) { //varient = 'danger', for danger alert
  const danger = variant === 'danger';
  const bgColor = danger ? 'bgAlert' : `bgColor-primary`;
  const border = danger ? 'border border-5 p-0 m-0 rounded bsAlert' : '';
  const dangerColor = danger ? 'pillBtnSolidDanger' : ``;
  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg">
      <div className={border}>
        <Modal.Header closeButton className={`${bgColor} border-0 text-uppercase`}>
          <Modal.Title>
            {danger && <DangerIcon />}
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`${bgColor} border-0 py-0`}>
          <p className={`${bgColor} pb-0 mb-0`}>{text}</p>
        </Modal.Body>
        <Modal.Footer className={`${bgColor} border-0 pt-1 ${center}`}>
            <Button autoFocus onClick={() => setShow(false)} className={`${pillButtonSolid} ${dangerColor}`}>OK</Button> {/* autofocus makes it so that the user can dismiss the alert with Ënter key */}
        </Modal.Footer>
      </div>
    </Modal>
  )
}
