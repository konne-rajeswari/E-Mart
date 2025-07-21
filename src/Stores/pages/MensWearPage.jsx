
import { menData} from '../data/men'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MensWearPage = () => {

  const [selectedProduct, setSelectedProduct] = useState([]);
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setSelectedProduct(selectedProduct.filter((item) => item !== mango));
        } else {
            setSelectedProduct([...selectedProduct, mango]);
        }
    }
    const filteredProduct = selectedProduct.length===0?
      menData : menData.filter((orange) => selectedProduct.includes(orange.brand));

  return (
   <>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {menData.map((menswear) => {
            return(
                <div className='pro-input'>
                    <label>
                        <input type="checkbox" 
                        checked ={selectedProduct.includes(menswear.brand)}
                        onChange={()=>companyHandler(menswear.brand)} />
                        {menswear.brand}
                    </label>
                
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <Link to={`/men/${item.id}`} >
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


export default MensWearPage
