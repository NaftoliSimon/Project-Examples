import React, { useState } from 'react'
import center from '../../../../../../../data/Bootstrap/center';
import baseUrl, { links } from '../../../../../../../data/URLpaths';
import myPostFetch from '../../../../../../../functions/myPostFetch';
import EditCommentBtn from './EditCommentBtn';

export default function AddEditComment({ unSelectComment, comment, setLoggedIn, loggedIn }) {
    const { id, body, name } = comment;
    const [commentBody, setCommentBody] = useState(body);
    const [commentName, setCommentName] = useState(name);

    const savedLoggedIn = {...loggedIn};

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
        window.location.reload(false); //Page reloads to load updated edited comment from db. TODO: make page scroll to edited comment, or update page without needing to reload
        
        // navigate(`${links.Blogs}/${loggedIn.userId}`)
        // window.location.reload(false);
        // setLoggedIn(savedLoggedIn);
    }

    const textInputStyle = `w-100 bgColor-primaryLight rounded border-0 backgroundImage-primary edit-hover`;
    return (
        <div className='border p-2 rounded borderColor-primary backgroundImage-primary'>
            <div className={`bgColor-primaryLight rounded backgroundImage-primary`}>
                <textarea className={textInputStyle} placeholder="Comment goes here..." value={commentBody} onChange={e => setCommentBody(e.target.value)} autoFocus />
                <input className={textInputStyle} placeholder='name' value={commentName} onChange={e => setCommentName(e.target.value)}></input>
            </div>
            <div className={`container ${center} mt-1`}>
                <EditCommentBtn text={'Update'} handleClick={submitComment} />
                <EditCommentBtn text={'Cancel'} handleClick={unSelectComment} />
            </div>
        </div>
    )
}
