import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const Selector = ({ handleChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const onMenuItemClick = (e) => {
    handleChange(e.target.innerText)
  }

  return (
    <div>
      <Dropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle caret>
          Edit
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem onClick={onMenuItemClick}>None</DropdownItem>
          <DropdownItem onClick={onMenuItemClick}>Not interested</DropdownItem>
          <DropdownItem onClick={onMenuItemClick}>Completed</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

export default Selector
