import React from 'react'
import { Alert, Button, Form, Modal } from 'react-bootstrap'
import AlertIcon from './AlertIcon';
import center from '../../data/Bootstrap/center';
import noShow from '../../data/storageKeys';

export default function PopUpAlert({ show, setShow, title, text, variant = 'primary' }) { //variant = 'danger', for danger alert
  const danger = variant === 'danger';
  const bgColor = danger ? 'bgAlert' : ``;
  // const border = danger ? 'modal-bg bgAlert border border-5 border-danger p-0 m-0 rounded bsAlert' : ``;
  // const dangerColor = danger ? '' : ``;

  const saveChecked = e => {
    const checked = e.target.checked;

    if (e.key === 'Enter') { e.target.checked = !(e.target.checked) }

    //if checkbox is checked the message will not show again when not connected to the serv (see App.js)
    if (checked) {
      localStorage.setItem(noShow, "true")
    } else {
      localStorage.removeItem(noShow)
    }
  }

  const checkbox = <Form.Check type={'checkbox'}
    label={`Don't Show this message again`}
    className={`checkbox-${variant} fst-italic pt-1 mb-0`}
    onChange={e => saveChecked(e)}
    onKeyDown={e => saveChecked(e)}
  />

  const theme = JSON.parse(localStorage.getItem('theme'));

  return (
    <Modal show={show} onHide={() => setShow(false)} size="lg" data-bs-theme={theme}>
      {/* <div className={border}> */}
      <Alert variant={variant} className='m-0 p-0'>
        <Modal.Header closeButton className={`border-0 text-uppercase`}>
          <Modal.Title>
            {/* {danger && <AlertIcon />} */}
            <AlertIcon variant={variant} />
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={`border-0 py-0`}>
          <p className={`pb-0 mb-0`}>{text}</p>
          {title === 'No Connection to the Server' && checkbox}
        </Modal.Body>
        <Modal.Footer className={`${bgColor} border-0 pt-1 ${center}`}>
          <Button autoFocus variant={variant} onClick={() => setShow(false)} className={`btn btn-primary`}>OK</Button> {/* autofocus makes it so that the user can dismiss the alert with Ënter key */}
        </Modal.Footer>
      </Alert>
      {/* </div> */}
    </Modal>
  )
}
