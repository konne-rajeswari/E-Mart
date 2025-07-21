
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const ACPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter((item) => item !== mango));
        } else {
            setSelectedProduct([...selectedProduct, mango]);
        }
    }
    const filteredProduct = selectedProduct.length===0?
     acData : acData.filter((orange) => selectedProduct.includes(orange.company));

  return (
   <>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {acData.map((ac) => {
            return(
                <div className='pro-input'>
                    <label>
                        <input type="checkbox" 
                        checked ={selectedProduct.includes(ac.company)}
                        onChange={()=>companyHandler(ac.company)} />
                        {ac.company}
                    </label>
                
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <Link to={`/ac/${item.id}`} >
                <div className='pageImg'>
                    <img src={item.image} alt="" />
                    </div>
                    </Link>
                <div className='pageModel'>
                    {item.company} , {item.model}
                </div>

                </div>
            )
        })}
      
    </div>
   </div>
   </>
  )
}
export default ACPage
