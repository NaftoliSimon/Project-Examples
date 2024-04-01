import React from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function DeleteModal(props) {
  //TODO: don't delete type from server, only from front end. (Delete from server after 30 days?)
  const { deleteUrl, type, onHide, ...rest } = props; //type can be 'Comment', 'Post', 'Blog', etc.
  
  const theme = JSON.parse(localStorage.getItem('theme'));
  return (
      <Modal
          data-bs-theme={theme}
          {...rest}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
      >
          {/* <div className={`rounded`}> */}
              <Modal.Header closeButton>
                  <Modal.Title className={`text-uppercase`} id="contained-modal-title-vcenter">
                      DELETE {type}
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <p>{type} will be deleted permanently. There is no way to undo this action. The choices that you make in your life, are what define you. Choose wisely.</p>
              </Modal.Body>
              <Modal.Footer>
                  <Button className={`btn btn-primary`} onClick={onHide} href={deleteUrl}>Delete {type}</Button>
                  <Button className={`btn btn-primary`} onClick={onHide}>Cancel</Button>
              </Modal.Footer>
          {/* </div> */}
      </Modal>)
}
