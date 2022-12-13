/* 
This file uses react-bootstrap instead of regular bootstrap. 
https://react-bootstrap.github.io/components/modal/#vertically-centered
*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import bgColor from '../../../../../../../data/backgroundColor';
import baseUrl from '../../../../../../../data/URLpaths';

export default function MyVerticallyCenteredModal(props) {
   const {blogId, commentId, ...rest} = props;
    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='text-dark'>
                    DELETE COMMENT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='text-dark'>
                    Comment will be deleted permanently.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={bgColor} onClick={props.onHide} href={`${baseUrl}/${blogId}/deleteComment/${commentId}`}>Delete Comment</Button>
                <Button variant={bgColor} onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}