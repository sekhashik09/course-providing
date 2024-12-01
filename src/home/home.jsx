
import React from 'react'
import Banner from '../components/Banner'
import BestSellerBook from './BestSellerBook'
import FavBook from './FavBook'
import Promo from './Promo'
import OthersBook from './OthersBook'
import Review from './Review'
import Categories from '../components/Categories'
import Topcategory from '../components/Topcategory'


const Home = () => {
  return (
    <div>
      <Banner />
      <Topcategory/>
      <BestSellerBook/>
      <FavBook/>
      <Promo/>
      <OthersBook/>
      <Review/>
    </div>
  )
}

export default Home