import React from 'react'
import { Button, Card, CardTitle, CardText, NavLink } from 'reactstrap'
import Selector from './Selector'

const Activity = ({ activity, add, handleStatusChange, detailed }) => {
  
  const showStatusEditor = detailed && !['Completed', 'Not interested'].includes(activity?.status) 

  return (
    <div>
      <Card className={`p-4 ${detailed ? 'border-0' : ''}`}>
        <CardTitle className='fs-3'>{activity?.activity}</CardTitle>
        <br />
        <div className='d-flex flex-row justify-content-between'>
          <Card className='p-2 flex-grow-1 fs-4'>
            <CardText><span className='fs-5'>Type:&nbsp;</span> {activity?.type}</CardText>
            <CardText><span className='fs-5'>Participants:&nbsp;</span> {activity?.participants}</CardText>
          </Card>
          &nbsp;
          &nbsp;
          <Card className='p-2 flex-grow-1 fs-4'>
            <CardText><span className='fs-5'>Price:&nbsp;</span> {activity?.price}</CardText>
            <CardText><span className='fs-5'>Status:&nbsp;</span> {activity?.status || 'None'}</CardText>
            {showStatusEditor && <Selector value={activity?.status} handleChange={handleStatusChange}  />}
          </Card>
        </div>
        <br />
        {activity?.link && (
          <>
            <NavLink className='p-0' href={activity?.link} target='_blank'>
              Visit the activity
            </NavLink>
          </>
        )}
        {add && <Button color='primary' onClick={add}>Add</Button>}
      </Card>
    </div>
  )
}

export default Activity
