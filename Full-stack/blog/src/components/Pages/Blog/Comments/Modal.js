/* 
This file uses react-bootstrap instead of regular bootstrap. 
https://react-bootstrap.github.io/components/modal/#vertically-centered
*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../data/URLpaths';
import { pillButtonSolid } from '../../../../data/Bootstrap/pillButton';

export default function MyVerticallyCenteredModal(props) { //rename to DeleteCommentModal
    //TODO: don't delete comment from server, only from front end. (Delete from server after 30 days?)
    const { blogId, postId, commentId, ...rest } = props;
    const deleteCommentUrl = `${baseUrl}/${blogId}/deleteComment/${commentId}/${postId}`;

    function deleteComment() {
        props.onHide();
        // window.location.reload();
        //TODO: make sure user stays logged in after deleting comment
    }
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
                <Button className={`button ${pillButtonSolid}`} onClick={deleteComment} href={deleteCommentUrl}>Delete Comment</Button>
                <Button className={`button ${pillButtonSolid}`} onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}