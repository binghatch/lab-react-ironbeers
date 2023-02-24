import React from 'react'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import BeerCard from '../components/BeerCard'

const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err))
  })

  return (
    <div>
      <Navbar />
      <div className='container-fluid p-5'>
        <div className="row">
          <div className="col"></div>
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className='fw-bold mb-3'>All Beers</h1>
            <div className="row row-cols-1 g-4">
              {beers.map(beer => <BeerCard key={beer._id} beerData={beer}/>)}
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  )
}

export default AllBeersPage