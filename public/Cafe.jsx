import React from 'react'
import Events from '/public/Events'
import Menu from './Menu'
import Pay from './Pay'
import Foot from './Foot'

const Cafe = () => {
  return (
    <>
    <div className='background-banner'>
        <Events/>
        <Menu/>
        <Pay/>
    </div>
    <Foot/>
    </>
  )
}

export default Cafe