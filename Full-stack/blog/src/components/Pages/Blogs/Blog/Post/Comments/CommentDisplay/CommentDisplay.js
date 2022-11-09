import React from 'react'
import CommentLayout from './CommentLayout'
import Dropdown from './Dropdown'

export default function CommentDisplay({ comment, changeSelectedComment }) {
    const { id, postId, body, name } = comment;
    return (<>
        <div className="col p-0 m-0">
            <CommentLayout body={body} name={name} />
        </div>
        <div className="col-auto p-0 m-0">
            <Dropdown commentId={id} postId={postId} changeSelectedComment={changeSelectedComment} />
        </div>
    </>)
}
