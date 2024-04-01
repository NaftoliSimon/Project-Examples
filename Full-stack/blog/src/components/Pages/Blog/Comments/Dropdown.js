import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import baseUrl from '../../../../data/URLpaths';
import DeleteModal from '../../../reuseable/DeleteModal';

function BasicExample({ commentId, postId, changeSelectedComment }) {
  const [modalShow, setModalShow] = useState(false);
  const { blogId } = useParams();
  const deleteCommentUrl = `${baseUrl}/${blogId}/deleteComment/${commentId}/${postId}`;

  return (<>
    <Dropdown>
      <Dropdown.Toggle variant='' id="editCommentToggle" className='ps-2 pe-0' > {/*variant="" removes default react bootstrap color (bootstrap primary) */}
        {/* Edit */}
        {/* <BsThreeDots size={20} /> */}
        <BsThreeDotsVertical size={20} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeSelectedComment(commentId)}>Edit</Dropdown.Item>
        <Dropdown.Item onClick={() => setModalShow(true)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <DeleteModal deleteUrl={deleteCommentUrl} type={'Comment'}
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

  </>);
}

export default BasicExample;
