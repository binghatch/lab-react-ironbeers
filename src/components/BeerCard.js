import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({ beerData }) => {
  const {image_url, name, tagline, contributed_by, _id } = beerData;

  return (
    <div className='card p-0 shadow border-0'>
      <div className="row g-0 p-0">
        <div className="col-3 rounded-start bg-success bg-gradient bg-opacity-100 d-flex justify-content-center align-items-center">
          <img src={image_url} alt="" className='img-fluid rounded-start h-75' style={{maxHeight: "160px", objectFit: "cover"}}/>
        </div>
        <div className="col-9">
          <div className="row row-cols-1 card-body g-0 justify-content-between h-100">
            <div className="col">
              <h3 className="fw-bold mb-1 text-truncate">{name}</h3>
              <p className="text-success text-opacity-50 text-truncate">{tagline}</p>
              <Link to={`/beers/${_id}`} className="btn btn-success btn-sm stretched-link" >More about this beer</Link>
            </div>
            <div className="col mt-auto">
              <small className="text-dark text-opacity-25 m-0 text-truncate">Contributed by: {contributed_by}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard