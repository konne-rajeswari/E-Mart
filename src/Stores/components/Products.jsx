import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Watch from './Watch'
import Men from './Men'
import Woman  from './Woman'
import Furniture from './Furniture'
import AC from "./AC"
import Kitchen from './Kitchen'
// import MobilePage from '../pages/MobilePage'

const Products = () => {
  return (
    <div>
     <Mobiles />
     <Computers />
     <Watch />
     <Men />
     <Woman />
     <Furniture />
     <AC />
     <Kitchen />
     {/* <MobilePage /> */}
    </div>
  )
}

export default Products
