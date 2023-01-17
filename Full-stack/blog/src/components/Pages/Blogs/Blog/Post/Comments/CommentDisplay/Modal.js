/* 
This file uses react-bootstrap instead of regular bootstrap. 
https://react-bootstrap.github.io/components/modal/#vertically-centered
*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../../../../data/URLpaths';

export default function MyVerticallyCenteredModal(props) {
    const { blogId, postId, commentId, ...rest } = props;
    return (
        <Modal
            {...rest}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='bgColor-primaryLight'>
                <Modal.Title id="contained-modal-title-vcenter" className='dark'>
                    DELETE COMMENT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bgColor-primaryLight'>
                <p className='dark'>
                    Comment will be deleted permanently.
                </p>
            </Modal.Body>
            <Modal.Footer className='bgColor-primaryLight'>
                <Button  className='button' onClick={props.onHide} href={`${baseUrl}/${blogId}/deleteComment/${commentId}/${postId}`}>Delete Comment</Button>
                <Button className='button' onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}