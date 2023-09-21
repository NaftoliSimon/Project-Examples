import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import useCustomNav from '../../../../hooks/navigate';

export default function Checkbox({ handleClose, checked, setChecked, attemptedSubmit }) {
    const style = !attemptedSubmit ? 'checkbox' : '';
    const navigate = useCustomNav()
    function goToTermsAndConditionsPage() {
        handleClose();
        navigate(`/termsandconditions`);
    }
    return (
        <Form.Group className="mb-3">
            <Form.Check
                required
                label={<div>I accept the <span
                    className='tac-link fst-italic text-decoration-underline pointer'
                    onClick={goToTermsAndConditionsPage}>terms and conditions</span>
                    {/* , even if I have not read them */}
                </div>}
                feedback="You must accept before submitting"
                feedbackType="invalid"
                onChange={(e) => setChecked(e.target.checked)}
                checked={checked}
                className={`${style}`}
            />
        </Form.Group>
    )
}
