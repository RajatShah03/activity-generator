import React from 'react'
import ActivityDetailed from './ActivityDetailed'

const ActivityList = ({ activities, updateActivities }) => {
  return (
    <div className='d-flex flex-wrap gap-4'>
      {activities.map((act, index) => (
        <ActivityDetailed
          key={act.key}
          activity={act}
          updateActivity={updateActivities(index)}
        />
      ))}
    </div>
  )
}

export default ActivityList
