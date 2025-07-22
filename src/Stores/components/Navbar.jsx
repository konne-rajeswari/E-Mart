import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'



const Navbar = () => {
const { cartItems } = useCart()

  return (
    <>
    <div className='navSection' >
        <Link to='/' className="custom-link">
        <div className="title">
            <h2>E-Mart</h2>
        </div>
        </Link>
        <div className='search'>
            <input type='text' placeholder='search...' />
        </div>
        <div className='user'>
            <div className='user-detail'>
                SignIn/SignUp
            </div>
            <Link to='/cart' >
            <div className="cart">Cart
                <span>{cartItems.length}</span>
            </div>
            </Link>

            
        </div>
    </div>
    <div className="subMenu">
                <ul>
                    <Link to='/mobiles' >
                    <li>Mobiles</li>
                    </Link>
                    <Link to='/computers' >
                    <li>Computers</li>
                    </Link>
                    <Link to='/watch' >
                    <li>Watch</li>
                    </Link>
                    <Link to='/menswear' >
                    <li>Men Wear</li>
                    </Link>
                    <Link to='/womenwear' >
                    <li>Women Wear</li>
                    </Link>
                    <Link to='/furniture' >
                    <li>Furniture</li>
                    </Link>
                    <Link to='/ac' >
                    <li>AC</li>
                    </Link>
                    <Link to='/kitchen' >
                    <li>Kitchen</li>
                    </Link>
                    <Link to='/books' >
                    <li>Books</li>
                    </Link>
                    <Link to='/fridge' >
                    <li>Fridge</li>
                    </Link>
                    <Link to='/speakers' >
                    <li>Speakers</li>
                    </Link>
                    <Link to='/tv' >
                    <li>TV</li>
                    </Link>
                </ul>
                </div>
    </>
  )
}

export default Navbar
