import React, { useState } from 'react'
import center from '../../../../data/Bootstrap/center';
import baseUrl from '../../../../data/URLpaths';
import myPostFetch from '../../../../functions/myPostFetch';
import EditCommentBtn from './EditCommentBtn';
import postFetch from '../../../../functions/postFetch';

export default function AddEditComment({ unSelectComment, comment, setLoggedIn, loggedIn }) {
    const { id, body, name } = comment;
    const [commentBody, setCommentBody] = useState(body);
    const [commentName, setCommentName] = useState(name);

    const url = `${baseUrl}/editComment/${id}`;
    // const headers = {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ body: commentBody, name: commentName })
    // };
    const submitComment = () => {
        // myPostFetch(url, headers);
        postFetch(url, { body: commentBody, name: commentName })
        unSelectComment();
        window.location.reload(false); //Page reloads to load updated edited comment from db. TODO: make page scroll to edited comment, or update page without needing to reload
    }

    const textInputStyle = `input w-100 bgColor-primary rounded border-0 edit-hover`;
    return (
        <div className=' p-2 mt-3 rounded borderColor-primary'>
            <div className={`bgColor-primary rounded`}>
                <textarea className={textInputStyle} placeholder="Comment goes here..." value={commentBody} onChange={e => setCommentBody(e.target.value)} autoFocus />
                <input className={`${textInputStyle} d-none`} placeholder='name' value={commentName} onChange={e => setCommentName(e.target.value)}></input>
            </div>
            <div className={`container ${center} mt-1`}>
                <EditCommentBtn text={'Update'} handleClick={submitComment} />
                <EditCommentBtn text={'Cancel'} handleClick={unSelectComment} />
            </div>
        </div>
    )
}
