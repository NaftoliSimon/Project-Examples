/* This file uses react-bootstrap instead of regular bootstrap. */
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useLocation } from 'react-router-dom';
import MyVerticallyCenteredModal from './Modal';

function BasicExample({ commentId, postId, changeSelectedComment }) {
  const [modalShow, setModalShow] = React.useState(false);

  const location = useLocation();
  const blogId = location.pathname.split('/').pop();

  return (<>
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className='ps-2'> {/* variant="" makes background color same as parent component */}

      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeSelectedComment(commentId)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <MyVerticallyCenteredModal commentId={commentId} blogId={blogId}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

  </>);
}

export default BasicExample;
