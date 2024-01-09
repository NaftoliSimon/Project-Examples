/* This file uses react-bootstrap instead of regular bootstrap. */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom';
import MyVerticallyCenteredModal from './Modal';

function BasicExample({ commentId, postId, changeSelectedComment }) {
  const [modalShow, setModalShow] = React.useState(false);
  const { blogId } = useParams();

  return (<>
    <Dropdown>
      <Dropdown.Toggle variant='' id="editCommentToggle" className='ps-2' > {/*variant="" removes default react bootstrap color (bootstrap primary) */}
        Edit
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeSelectedComment(commentId)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <MyVerticallyCenteredModal commentId={commentId} blogId={blogId} postId={postId}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

  </>);
}

export default BasicExample;
