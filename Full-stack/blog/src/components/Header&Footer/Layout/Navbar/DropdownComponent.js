import React, { useState } from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { links } from '../../../../data/URLpaths';
import useCustomNav from '../../../../hooks/navigate';
import blogListLocation from '../../../../data/scrollToHeight';


const DropdownComponent = () => {
  //TODO: add dark mode to dropdown
  const navigate = useCustomNav();
  // const scrollToHeight = text === 'Blogs' ? blogListLocation : null; //null defaults to top of page

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      className='btn header-button'
      href=""
      ref={ref}
      onClick={e => {
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

      const searchbarFilter = <Form.Control autoFocus placeholder="Type to filter..."
        className="mx-3 my-2 w-auto"
        onChange={e => setValue(e.target.value)}
        value={value}
      />

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          {/* {searchbarFilter} */}

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
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {/* {Object.entries(links).map(([name, [link, icon]]) =>
          <Dropdown.Item key={name} className='dropdown' onClick={() => navigate(link, name === 'Blogs' ? blogListLocation : null)}>
            {icon}<span className='ps-1'>{name}</span>
            </Dropdown.Item>)} */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
