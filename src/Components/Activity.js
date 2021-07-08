import React from 'react'
import { Button, Card, CardTitle, CardText, NavLink } from 'reactstrap'
import Selector from './Selector'

const Activity = ({ activity, add, handleStatusChange, detailed }) => {
  
  const showStatusEditor = detailed && !['Completed', 'Not interested'].includes(activity?.status) 

  return (
    <div>
      <Card className={`p-4 ${detailed ? 'border-0' : ''}`}>
        <CardTitle>{activity?.activity}</CardTitle>
        <br />
        <div className='d-flex flex-row justify-content-between'>
          <Card className='p-2 flex-grow-1'>
            <CardText>Type: {activity?.type}</CardText>
            <CardText>Participants: {activity?.participants}</CardText>
          </Card>
          &nbsp;
          &nbsp;
          <Card className='p-2 flex-grow-1'>
            <CardText>Price: {activity?.price}</CardText>
            <CardText>Status: {activity?.status || 'None'}</CardText>
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
