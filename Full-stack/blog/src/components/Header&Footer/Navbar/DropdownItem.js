import React from 'react'
import { Dropdown } from 'react-bootstrap'
import ListIcon from '../../Pages/BlogList/ListIcon'

export default function DropdownItem({ onClick, icon, text }) {
    return (
        <Dropdown.Item className='dropdown' onClick={onClick}>
            <ListIcon icon={icon} /> {text}
        </Dropdown.Item>
    )
}
