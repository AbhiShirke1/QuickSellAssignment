import React from 'react'
import './Divide.css'
import Card from './Card'

const Divide2 = (props) => {
  return (
    // <div className='hi'>
      <div className='mainPart2'>
      <div className="part2">

        <Card id={props.id} title={props.title} tag={props.tag} header={props.header}/>
      </div>
     
    </div>
    // </div>
  )
}

export default Divide2
