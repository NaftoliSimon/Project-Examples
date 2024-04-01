import React from 'react'
import CommentLayout from './CommentLayout'
import Dropdown from './Dropdown'
import bgLightOrDark from '../../../../data/Bootstrap/colors';
import center from '../../../../data/Bootstrap/center';

export default function CommentDisplay({ comment, changeSelectedComment, loggedIn }) {
    const { id, postId, body, name, userId } = comment;
    return (<>
        <div className={`col p-0 m-0`}>
            <CommentLayout body={body} name={name} />
        </div>
        {loggedIn && loggedIn.userId === userId && 
        <div className={`col-auto p-0 m-0`}> {/*only show dropdown if the logged in user id is the same as the comment's userId */}
            <Dropdown commentId={id} postId={postId} changeSelectedComment={changeSelectedComment} />
        </div>}
    </>)
}
