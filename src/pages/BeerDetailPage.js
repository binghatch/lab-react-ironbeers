import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BeerDetailPage = () => {
  const [beer, setBeer] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => setBeer(response.data))
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <Navbar />
      <div className='container-fluid p-5'>
        <div className="row">
          <div className="col"></div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className='fw-bold mb-3'>{beer.name} <span class="badge bg-secondary">{beer.abv}%</span></h1>
            <div className="row row-cols-2 g-2">
              <div className="col-3 me-1">
                <div className="card p-1 bg-success bg-gradient bg-opacity-100 d-flex justify-content-center align-items-center" style={{width: "160px", height: "160px", objectFit: "contain"}}>
                  <img className="img-fluid h-75" src={beer.image_url} />
                </div>
              </div>
              <div className="col-8">
                <ul className="list-group">
                  <li className="list-group-item">An item</li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                  <li className="list-group-item">A fourth item</li>
                  <li className="list-group-item">And a fifth one</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default BeerDetailPage