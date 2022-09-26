import React, { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const ButtonDropDown = ({ title, options, onClick, name, onlyvalue }) => {
  const [open, setOpen] = useState(false);
  const handleChange = (e, val) => {
    if (val) {
      onClick(prev => ({
        ...prev,
        [name]: {
          key: val,
          value: e,
          onlyvalue,
        },
      }));
    } else {
      onClick(prev => ({
        ...prev,
        [name]: e,
      }));
    }
  };
  return (
    <div>
      <Dropdown toggle={() => setOpen(e => !e)} isOpen={open}>
        <DropdownToggle caret color="primary" className="dropdownColor">
          {title}
          <i className="mdi mdi-chevron-down ml-2" />
        </DropdownToggle>
        <DropdownMenu>
          {/* <DropdownItem value="" onClick={() => handleChange('', '')}>
            All
          </DropdownItem> */}
          {!options.length ? (
            <DropdownItem>No data</DropdownItem>
          ) : (
            <DropdownItem value="" onClick={() => handleChange('', '')}>
              All
            </DropdownItem>
          )}
          {options.map(item => {
            // eslint-disable-next-line no-unused-expressions
            if (typeof item === 'object') {
              return (
                <DropdownItem
                  key={Object.keys(item)[0]}
                  value={Object.values(item)[0]}
                  onClick={e => handleChange(e.target.value, Object.keys(item)[0])}
                  // active={item === title}
                >
                  {Object.keys(item)[0]}
                </DropdownItem>
              );
            }
            return (
              <DropdownItem
                key={item}
                value={item}
                onClick={e => handleChange(e.target.value)}
                active={item === title}
              >
                {item}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
export default ButtonDropDown;