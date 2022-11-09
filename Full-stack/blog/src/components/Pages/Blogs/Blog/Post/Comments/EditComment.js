import React, { useState } from 'react'
import bgColor from '../../../../../../data/backgroundColor';
import center from '../../../../../../data/center';
import baseUrl from '../../../../../../data/URLpaths';
import myPostFetch from '../../../../../../functions/myPostFetch';
import CommentsBtn from './AddComment/CommentsBtn';

export default function AddEditComment({ unSelectComment, comment }) {
    const { id, body, name } = comment;
    const [commentBody, setCommentBody] = useState(body);
    const [commentName, setCommentName] = useState(name);
    
    const url = `${baseUrl}/editComment/${id}`;
    const headers = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body: commentBody, name: commentName })
    };
    const submitComment = () => {
        myPostFetch(url, headers);
        unSelectComment();
    }

    const textInputStyle = `w-100 list-group-item-${bgColor} rounded border-0`;
    return (
        <div className='border p-2 rounded'>
            <div className={`list-group-item-${bgColor} comment rounded`}>
                <textarea className={textInputStyle} placeholder="Comment goes here..." value={commentBody} onChange={e => setCommentBody(e.target.value)}></textarea>
                <input className={textInputStyle} placeholder='name' value={commentName} onChange={e => setCommentName(e.target.value)}></input>
            </div>
            <div className={`container ${center} mt-1`}>
                <CommentsBtn text={'Update'} handleClick={submitComment}></CommentsBtn> {/*TODO: make buttons green, ie default success btn? */}
                <CommentsBtn text={'Cancel'} handleClick={unSelectComment}></CommentsBtn>
            </div>
        </div>
    )
}
