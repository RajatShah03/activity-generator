import React from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

const TextArea = ({ value, handleChange }) => {

  const onChange = e => {
    handleChange(e.target.value)
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type='textarea'
            value={value}
            onChange={onChange}
          />
        </FormGroup>
      </Form>
    </div>
  )
}

export default TextArea
