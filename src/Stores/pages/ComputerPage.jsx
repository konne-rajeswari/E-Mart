
import { computerData } from "../data/computers"
import Navbar from '../components/Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ComputerPage = () => {
    
        const [selectedProduct, setSelectedProduct] = useState([]);
        const companyHandler = (mango) => {
            if (selectedProduct.includes(mango)) {
                setSelectedProduct(selectedProduct.filter((item) => item !== mango));
            } else {
                setSelectedProduct([...selectedProduct, mango]);
            }
        }
        const filteredProduct = selectedProduct.length===0?
          computerData : computerData.filter((orange) => selectedProduct.includes(orange.company));
  return (
    <div>
       <>
   <Navbar />
   <div className="fullpage">
     <div className="pro-selected">
        {computerData.map((computer) => {
            return(
                <div className='pro-input'>
                    <label>
                        <input type="checkbox" 
                        checked ={selectedProduct.includes(computer.company)}
                        onChange={()=>companyHandler(computer.company)} />
                        {computer.company}
                    </label>
                
                </div>
            )
        })}
    </div>

    <div className='pageSection'>
        {filteredProduct.map((item) => {
            return(
                <div>
                    <Link to={`/computer/${item.id}`} >
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
    </div>
  )
}

export default ComputerPage
