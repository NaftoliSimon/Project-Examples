import React, { useState } from 'react'
import center from '../../../data/Bootstrap/center';
import Form from 'react-bootstrap/Form';
import myPostFetch from '../../../functions/myPostFetch';
import { useParams } from 'react-router-dom';
import baseUrl from '../../../data/URLpaths';
import { CloseButton } from 'react-bootstrap';
import pillButton from '../../../data/Bootstrap/pillButton';

//This file is used for both Adding a new post and Editing an existing post.
export default function AddPost({ show, setShow, savedData = null }) { //savedData is the post data for editing a post
    const { blogId: url_id } = useParams(); //url parameters
    const [title, setTitle] = useState(savedData?.title || '');
    const [body, setBody] = useState(savedData?.title || '');
    
    const addOrEditData = !savedData ? { title, body, userId: url_id } : { title, body, postId: savedData.id }
    const postData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(addOrEditData)
    };
    const closeAddPost = (e) => {
        e.preventDefault();
        setShow(false)
    }
    const submitPost = (e) => {
        e.preventDefault();
        if (savedData) {
            myPostFetch(`${baseUrl}/postInfo/edit`, postData);
            window.location.reload();
        } else {
            if (title !== '' && body !== '') {
                myPostFetch(`${baseUrl}/postInfo`, postData);
                window.location.reload();
            }
        }

    }

    const liStyle = ` bgColor-primary color-secondary-reverse p-3 m-2 rounded border ${center} w-100`;
    const postButtonStyle = `d-block btn post-btn btn-sm me-2 ${pillButton}`;
    const editStyle = savedData ? 'w-100' : '';
    const textInputStyle = `backgroundImage-primary`;
    return (<>
        {show && <div className={`${editStyle} list-group post d-flex flex-row flex-wrap ${center}`}>
            <div className={`${liStyle}`}>
                <Form className={`w-100`}>
                    <Form.Group controlId="exampleForm.ControlInput1" className={`mb-3`}> {/*onSubmit={e => e.preventDefault()} */}
                        <div className='d-flex justify-content-between'>
                            <Form.Label>Title</Form.Label> <CloseButton aria-label="Hide" variant="white" onClick={(e) => closeAddPost(e)} />
                        </div>

                        <Form.Control type="text" placeholder="Title goes here..." className={textInputStyle}
                            value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Post goes here..." className={textInputStyle}
                            value={body} onChange={e => setBody(e.target.value)} />
                    </Form.Group>
                    <div className={`${center}`}>
                        <button aria-label="Hide" className={postButtonStyle} onClick={e => submitPost(e)}>{savedData ? 'Edit' : 'Submit'} Post </button>
                        <button aria-label="Hide" className={postButtonStyle} onClick={(e) => closeAddPost(e)}> Cancel </button>
                    </div>
                </Form>
            </div>
        </div>}
    </>
    )
}
