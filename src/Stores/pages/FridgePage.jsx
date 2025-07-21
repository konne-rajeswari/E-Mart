
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const FridgePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter((item) => item !== mango));
        } else {
            setSelectedProduct([...selectedProduct, mango]);
        }
    }
    const filteredProduct = selectedProduct.length===0?
      fridgeData : fridgeData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
   <>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {fridgeData.map((fridge) => {
            return(
                <div className='pro-input'>
                    <label>
                        <input type="checkbox" 
                        checked ={selectedProduct.includes(fridge.brand)}
                        onChange={()=>companyHandler(fridge.brand)} />
                        {fridge.brand}
                    </label>
                
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <Link to={`/fridge/${item.id}`} >
                <div className='pageImg'>
                    <img src={item.image} alt="" />
                    </div>
                    </Link>
                <div className='pageModel'>
                    {item.brand} , {item.model}
                </div>

                </div>
            )
        })}
      
    </div>
   </div>
   </> 
  )
}

export default FridgePage
