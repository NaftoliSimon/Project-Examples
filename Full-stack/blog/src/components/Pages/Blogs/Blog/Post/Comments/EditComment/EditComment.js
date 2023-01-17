import React, { useState } from 'react'
import center from '../../../../../../../data/Bootstrap/center';
import baseUrl from '../../../../../../../data/URLpaths';
import myPostFetch from '../../../../../../../functions/myPostFetch';
import EditCommentBtn from './EditCommentBtn';

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

    const textInputStyle = `input w-100 bgColor-primaryLight rounded border-0`;
    return (
        <div className='border p-2 rounded edit'>
            <div className={`bgColor-primaryLight rounded`}>
                <textarea className={textInputStyle} placeholder="Comment goes here..." value={commentBody} onChange={e => setCommentBody(e.target.value)}></textarea>
                <input className={textInputStyle} placeholder='name' value={commentName} onChange={e => setCommentName(e.target.value)}></input>
            </div>
            <div className={`container ${center} mt-1`}>
                <EditCommentBtn text={'Update'} handleClick={submitComment} />
                <EditCommentBtn text={'Cancel'} handleClick={unSelectComment} />
            </div>
        </div>
    )
}
