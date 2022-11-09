/* 
This file uses react-bootstrap instead of regular bootstrap. 
https://react-bootstrap.github.io/components/modal/#vertically-centered
*/
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import baseUrl from '../../../../../../../data/URLpaths';

export default function MyVerticallyCenteredModal(props) {
   const {blogId, commentId} = props;
    return (
        <Modal
            {...props}
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
                <Button variant="success" onClick={props.onHide} href={`${baseUrl}/${blogId}/deleteComment/${commentId}`}>Delete Comment</Button>
                <Button variant="success" onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);