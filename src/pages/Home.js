import React from 'react'
import {Link} from "react-router-dom"
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'


const Home = () => {
  return (
    <>
    <Hero>
      <Banner title="Luxurious rooms" subTitle="deluxe rooms at $200">
        <Link to='rooms' className="btn-primary">
          our rooms
        </Link>
      </Banner>
    </Hero>
    <Services/>
    </>
  )
}
export default Home;