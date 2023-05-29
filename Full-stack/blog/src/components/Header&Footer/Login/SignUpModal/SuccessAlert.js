import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const SuccessAlert = ({ name, show, hide }) => {
  const closeModal = () => hide(false);
  const bgColor = 'bgColor-primary';

  return (
    <Modal show={show} onHide={closeModal} backdrop="static" keyboard={false}>
      <Modal.Header className={bgColor} closeButton>
        <Modal.Title>Account Created Successfully!!!</Modal.Title>
      </Modal.Header>
      <Modal.Body className={bgColor}>
        <p>
          Welcome {name}! Click on the person icon in the top right corner of the website for your account details.
        </p>
      </Modal.Body>
      <Modal.Footer className={bgColor}>
        <Button variant="success" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SuccessAlert;
