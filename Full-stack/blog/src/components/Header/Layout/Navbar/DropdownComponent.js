import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { links } from '../../../../data/URLpaths';

const DropdownComponent = () => {
  //TODO: add dark mode to dropdown
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      className='btn header-button'
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {/* {children} */}
      Go To
      &#x25bc;
    </button>
  ));

  // forwardRef again here!
  // Dropdown needs access to the DOM of the Menu to measure it
  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );
  // const linksAsArray = Object.entries(links);
  // console.log('linksAsArray', linksAsArray);
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {Object.entries(links).map(([name, link]) => 
        <Dropdown.Item key={name} className='dropdown' href={link}>{name}</Dropdown.Item>)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
