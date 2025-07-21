
import { womanData } from '../data/woman'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';


const WomenWearPage = () => {
const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter((item) => item !== mango));
        } else {
            setSelectedProduct([...selectedProduct, mango]);
        }
    }
    const filteredProduct = selectedProduct.length===0?
      womanData : womanData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
   <>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {womanData.map((womenwear) => {
            return(
                <div className='pro-input'>
                    <label>
                        <input type="checkbox" 
                        checked ={selectedProduct.includes(womenwear.brand)}
                        onChange={()=>companyHandler(womenwear.brand)} />
                        {womenwear.brand}
                    </label>
                
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <Link to={`/woman/${item.id}`} >
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


export default WomenWearPage
