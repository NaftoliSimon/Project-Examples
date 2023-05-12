// forwardRef again here!

import React, { useState } from "react";
import { Form } from "react-bootstrap";

// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');
    const searchbarFilter = (
        <Form.Control autoFocus placeholder="Type to filter..." className="mx-3 my-2 w-auto" value={value}
            onChange={(e) => setValue(e.target.value)} />
    );

    return (
        <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
        {searchbarFilter}
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter((child) => {
            if (!value) return true;
            if (typeof child !== "undefined" && child.props && typeof child.props.children !== "undefined" && child.props.children !== null) {
              return (child.props.children[1] && child.props.children[1].toLowerCase().includes(value.toLowerCase()) ||
                child.props.children[1] && child.props.children[1].toLowerCase().replaceAll(" ", "").includes(value.toLowerCase()));
            }
            return true;
          })
            .map((child) => {
              if (typeof child !== "undefined" && child.props && typeof child.props.children !== "undefined" && child.props.children !== null) {
                if (typeof child.props.children === "object") {
                  return React.cloneElement(child, { children: child.props.children });
                }
              }
              return child;
            })}
        </ul>
      </div>
    );
}
);
export default CustomMenu;
