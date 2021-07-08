import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Card, CardText, Collapse } from 'reactstrap'
import Activity from './Activity'
import TextArea from './TextArea'

const ActivityDetailed = ({ activity, updateActivity }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [edit, setEdit] = useState(activity?.description ? false : true)
  const [desc, setDesc] = useState(activity?.description || '')
  
  useEffect(() => {
    setDesc(activity?.description || '')
  }, [activity])

  const toggle = () => setIsOpen(!isOpen)

  const toggleEdit = () => setEdit(!edit)

  const update = (field, value) => {
    updateActivity({
      ...activity,
      [field]: value
    })
  }

  const editStatus = (value) => {
    update('status', value)
  }

  const submit = () => {
    update('description', desc)
    toggleEdit()
  }

  return (
    <div style={{ minWidth: '45%' }} className='flex-grow-1 flex-shrink-0'>
      <Card className='p-2'>
        <Activity activity={activity} handleStatusChange={editStatus} detailed />
        <Button outline color='success' onClick={toggle}>
          {isOpen ? 'Collapse' : `Expand to ${activity?.description ? 'see' : 'add'} description`}
        </Button>
        <Collapse isOpen={isOpen}>
          {!edit ? (
            <div className='p-4'>
              <CardText className='fs-4'>{desc}</CardText>
              <Button onClick={toggleEdit}>Edit</Button>
            </div>
          ) : (
            <div className='p-4'>
              <TextArea value={desc} handleChange={setDesc} />
              <ButtonGroup className='mt-2'>
                <Button onClick={toggleEdit}>Cancel</Button>
                <Button color='primary' onClick={submit}>Submit</Button>
              </ButtonGroup>
            </div>
          )}
        </Collapse>
      </Card>
    </div>
  )
}

export default ActivityDetailed
