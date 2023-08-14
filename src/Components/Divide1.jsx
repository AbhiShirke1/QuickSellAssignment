import React from 'react'
import './Divide.css'
import Card from './Card'

const Divide1 = (props) => {
  return (
    // <div className="hi">
    <div className='mainPart1'>
      <div className="part1">
        
        <Card id={props.id} title={props.title} tag={props.tag} name={props.name} hi={props.hi} header={props.header}/>
      </div>
 
    </div>
    // </div>
  )
}

export default Divide1

