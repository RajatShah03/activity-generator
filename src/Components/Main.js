import React, { useState } from 'react'
import ActivityGenerator from './ActivityGenerator'
import ActivityList from './ActivityList'
import { Button, Input } from 'reactstrap'

const Main = () => {
  const [activityList, setActivityList] = useState([])
  const [sort, setSort] = useState(false)
  const [filter, setFilter] = useState('')
  const [filtering, setFiltering] = useState(false)
  
  const handleFilterChange = e => setFilter(e.target.value)

  const updateActivities = index => data => {
    const copy = [...activityList]
    copy[index] = data
    setActivityList(copy)
  }

  const sortByParticipants = list => list.sort((a, b) => b.participants - a.participants)
 
  const filterActivities = list => list.filter(act => act.status === filter)

  const getList = data => {
    return sort ? 
        filtering ? 
          filterActivities(sortByParticipants(data)) 
        : sortByParticipants(data)
      : filtering ?
          filterActivities(data)
        : data
  }

  return (
    <div className="p-4 m-4 d-flex flex-column">
        <ActivityGenerator setActivities={setActivityList} />
        <br />
        <br />
        <div className="d-flex gap-4">
          <Input value={filter} onChange={handleFilterChange} placeholder='Filter By Status' />
          <Button color='secondary' style={{ minWidth: '16%' }} onClick={() => setFiltering(!filtering)}>{filtering ? 'Remove Filter' : 'Filter'}</Button>
          <Button color='secondary' style={{ minWidth: '16%' }} onClick={() => setSort(true)}>Sort By Participants</Button>
        </div>
        <br />
        <br />
        {activityList.length > 0 ? (
            <ActivityList
              activities={getList(activityList)}
              updateActivities={updateActivities}
            />
          ) : (
            <div className='fs-5'>
              No Activities Found
            </div>
        )}
      </div>
  )
}

export default Main
