import React, { useState } from 'react'
import center from '../../../../../../../data/Bootstrap/center';
import baseUrl from '../../../../../../../data/URLpaths';
import myPostFetch from '../../../../../../../functions/myPostFetch';
import CommentsBtn from './CommentsBtn';

export default function AddComment({ closeAddComment, postId, loggedIn }) {
    const {firstName, lastName, userId} = loggedIn;

    const [commentBody, setCommentBody] = useState('');
    const [commentName, setCommentName] = useState(`${firstName} ${lastName}`);

    const url = `${baseUrl}/comments/${postId}/${userId}`;
    const headers = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ body: commentBody, name: commentName })
    };
    const submitComment = () => {
        myPostFetch(url, headers);
        closeAddComment();
    }

    const textInputStyle = `input w-100 bgColor-primaryLight rounded border-0`;
    return (
        <div className='border p-2 rounded'>
            <div className={`bgColor-primaryLight comment p-2 m-3 rounded`}>
                <textarea className={textInputStyle} placeholder="Comment goes here..." value={commentBody} onChange={e => setCommentBody(e.target.value)}></textarea>
                <input className={textInputStyle} placeholder='name' value={commentName} onChange={e => setCommentName(e.target.value)}></input>
            </div>
            <div className={`container ${center}`}>
                <CommentsBtn text={'Add'} handleClick={submitComment}></CommentsBtn>
                <CommentsBtn text={'Cancel'} handleClick={closeAddComment}></CommentsBtn>
            </div>
        </div>
    )
}
