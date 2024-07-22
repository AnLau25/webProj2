import React from 'react'
import EventsSp from '../EventsSp'
import MenuSp from '../MenuSp'
import PaySp from '../PaySp'

const CafeSp = () => {
  return (
    <>
      <div className='background-banner'>
        <EventsSp />
        <MenuSp />
        <PaySp/>
      </div>
      <Foot />
    </>
  )
}

export default CafeSp

//eventssp , menusp , paysp