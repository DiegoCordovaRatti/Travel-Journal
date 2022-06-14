import React from 'react'
import '../style/Card.css'
import Pin from '../images/pin.svg'

export default function Card(props){
    return(
        <div className='card--container'>
            <img className='card-image' src={props.item.imageUrl} alt={props.item.location + '-image'}/>
            <div>
                <div className='card-header--container'>
                    <img className='card-header--pin' src={Pin} alt='pin'/>
                    <span className='card-header--location'>{props.item.location}</span>
                    <a className='card-header--link' href={props.item.googleMapsUrl} target='_blank' rel="noreferrer" >View on Google Maps</a>
                </div>
                <h2 className='card-title'>{props.item.title}</h2>
                <div className='card-date--container'>
                    <strong className='card-date'>{props.item.startDate}</strong>
                    <strong className='card-date'> - </strong>
                    <strong className='card-date'>{props.item.endDate}</strong>
                </div>
                <p className='card-description'>{props.item.description}</p>
            </div>
        </div>
    )
}