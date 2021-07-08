import React, { useState } from 'react'
import { Button, Card, CardText, CardTitle } from 'reactstrap'
import generateActivity from '../api/generateActivity'
import Activity from './Activity'
import Loader from './Loader'

const ActivityGenerator = ({ setActivities }) => {
  const [activity, setActivity] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const generate = () => {
    setIsLoading(true)
    setActivity(null)
    generateActivity((err, res) => {
      if (err) {
        console.log(err)
        setActivity('error')
      } else {
        setActivity(res)
      }

      setIsLoading(false)
    })
  }

  const add = () => {
    setActivities(activities => [...activities, activity])
    setActivity(null)
  }

  return (
    <div>
      <Card className='p-4 gap-4 flex-row flex-wrap justify-content-center'>
        <Card className='p-2 border-0 d-flex flex-column flex-grow-1 flex-shrink-0'>
          <CardTitle className='fs-2'>
            Activity generator tool
          </CardTitle>
          <CardText>
            Click the button to generate a random activity
          </CardText>
          <Button color='primary' disabled={isLoading} onClick={generate}>
            Generate
          </Button>
        </Card>
        <div style={{ minWidth: '50%' }} className='flex-grow-1 flex-shrink-0'>
          {isLoading && <Loader loading={isLoading} />}
          {activity && <Activity activity={activity} add={add} />}
        </div>
      </Card>
    </div>
  )
}

export default ActivityGenerator
