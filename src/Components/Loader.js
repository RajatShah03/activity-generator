import React from 'react'
import { Card, Spinner } from 'reactstrap'

const Loader = ({ loading }) => {
  return (
    <Card className='justify-content-center align-items-center' style={{ height: '16rem' }}>
      {loading && <Spinner size='lg' />}
    </Card>
  )
}

export default Loader
