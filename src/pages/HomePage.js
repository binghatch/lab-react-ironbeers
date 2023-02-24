import React from 'react'
import NavigationCard from '../components/NavigationCard'

const HomePage = () => {
  return (
    <div className='container-fluid p-5'>
      <div className="row">
        <div className="col"></div>
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h1 className='fw-bold mb-3'>Welcome</h1>
          <div className="row row-cols-1 g-4">
            <div className="col">
              <NavigationCard
                img={"https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"}
                title={"All Beers"}
                description={"Take a sip of our unique collection of beers, carefully curated from different parts of the globe. Explore the vast range of flavors, colors, and aromas, and find your perfect brew."}
                url="/beers"
              />
            </div>
            <div className="col">
              <NavigationCard
                img={"https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80"}
                title={"Random Beer"}
                description={"Tired of always sticking to the same beer? Allow us to surprise you with a new taste experience. With our random beer generator, you'll discover new brews and expand your palate."}
                url="/random-beer"
              />
            </div>
            <div className="col">
              <NavigationCard
                img={"https://images.unsplash.com/photo-1615332579037-3c44b3660b53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"}
                title={"New Beer"}
                description={"Do you have a new beer to share with the world? Join our community and add it to our growing database. Let others experience your brew and become part of the global beer culture."}
                url="/new-beer"
              />
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default HomePage