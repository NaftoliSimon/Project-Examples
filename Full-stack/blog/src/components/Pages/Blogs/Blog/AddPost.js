import React, { useState } from 'react'
import center from '../../../../data/Bootstrap/center';
import CommentsBtn from './Post/Comments/AddComment/CommentsBtn';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';


export default function AddPost() {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const liStyle = ` bgColor-primary color-secondary-reverse p-3 m-2 rounded border ${center} w-100`;
    const titleStyle = `h6 text-capitalize text-decoration-underline`;

    const textInputStyle = `input w-100 bgColor-primaryLight rounded border-0 m-2`;
    return (
        <div className={`list-group post d-flex flex-row flex-wrap ${center}`}>
            <div className={`${liStyle} w-100`}>
                {/* <input className={textInputStyle} placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus></input>
                <textarea className={textInputStyle} placeholder="Post goes here..." value={body} onChange={e => setBody(e.target.value)} /> */}
                <Form className={`w-100`}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
                        <Form.Control
                            placeholder="Post Title Goes Here..."
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Text>Post</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea"  placeholder='Post Goes Here...' rows={6}/>
                    </InputGroup>

                    {/* <Form.Group controlId="exampleForm.ControlInput1" className={`mb-3`}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post</Form.Label>
                        <Form.Control as="textarea" rows={6} placeholder="Post goes here..." />
                    </Form.Group> */}
                </Form>
            </div>
        </div>
    )
}
