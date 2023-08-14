import React, { useEffect } from 'react'
import axios from 'axios'
import './Card.css'

const Card = (props) => {
    return (
        <>
            <div className='top'>
                <div className="card">
                    <div className="container">
                        <div className='same'>
                            <p style={{ display: "inline-block" }}>{props.id}</p>

                            <div class='icon-container'>
                                <img src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="" />
                                <div class='status-circle' title=''></div>
                            </div>

                        </div>


                        <div className='mainTitle'><b> {props.title} </b></div>
                        <div>{props.priority}</div>
                        <div className='tag'>
                            <div className="feature">
                                <div className='status-circle2'> </div>
                                <div className='tag'>{props.tag}</div>
                                <div>{props.name}</div>
                                <div>{props.hi}</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
