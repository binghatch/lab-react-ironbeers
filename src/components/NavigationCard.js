import React from 'react'
import { Link } from 'react-router-dom'

const NavigationCard = (props) => {
  return (
    <div className="card">
      <img className="card-img-top" src={props.img} alt={props.title.toLowerCase()} style={{ height: "128px", objectFit: "cover"}}/>
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link to={props.url} className="btn btn-primary stretched-link" >Go to {props.title}</Link>
      </div>
    </div>
  )
}

export default NavigationCard