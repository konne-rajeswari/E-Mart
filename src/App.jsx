import React from 'react'
import LandingPage from './Stores/pages/LandingPage'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MobilePage from './Stores/pages/MobilePage';
import ComputerPage from './Stores/pages/ComputerPage';
import WatchPage from './Stores/pages/WatchPage';
import ACPage from './Stores/pages/ACPage';
import FurniturePage from './Stores/pages/FurniturePage';
import KitchenPage from './Stores/pages/KitchenPage';
import MensWearPage from './Stores/pages/MensWearPage';
import WomenWearPage from './Stores/pages/WomenWearPage';
import FridgePage from './Stores/pages/FridgePage';
import SpeakersPage from './Stores/pages/SpeakersPage';
import BooksPage from './Stores/pages/BooksPage';
import TVPage from './Stores/pages/TVPage';
import Mobilesingle from './Singles/MobileSingle';
import UserCart from './Stores/UserCart';
import ComputerSingle from './Singles/ComputerSingle';
import ACSingle from './Singles/ACSingle';
import BooksSingle from './Singles/BooksSingle';
import FurnitureSingle from './Singles/FurnitureSingle';
import WatchSingle from './Singles/WatchSingle';
import MensWearSingle from './Singles/MensWearSingle';
import WomenWearSingle from './Singles/WomenWearSingle';
import FridgeSingle from './Singles/FridgeSingle';
import KitchenSingle from './Singles/KitchenSingle';
import SpeakerSingle from './Singles/SpeakerSingle';
import TVSingle from './Singles/TVSingle';



const App = () => {
  
  return (
    <div>
      {/* <BrowserRouter>
      <Navbar /> */}
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/mobiles' element={<MobilePage />} />
      <Route path='/computers' element={<ComputerPage />} />
      <Route path='/watch' element={<WatchPage />} />
      <Route path='/ac' element={<ACPage/>} />
      <Route path='/furniture' element={<FurniturePage />} />
      <Route path='/kitchen' element={<KitchenPage />} />
     <Route path='/menswear' element={<MensWearPage />} />
      <Route path='/womenwear' element={<WomenWearPage />} />
      <Route path='/fridge' element={<FridgePage />} />
      <Route path='/speakers' element={<SpeakersPage />} />
      <Route path='/books' element={<BooksPage />} />
      <Route path='tv' element={<TVPage />} />
      <Route path='/mobiles/:id' element={<Mobilesingle />} />
      <Route path='/computer/:id' element={<ComputerSingle />} />
      <Route path='/ac/:id' element={<ACSingle />} />
      <Route path='/books/:id' element={<BooksSingle />} />
      <Route path='/furniture/:id' element={<FurnitureSingle />} />
      <Route path='/watch/:id' element={<WatchSingle />} />
      <Route path='/men/:id' element={<MensWearSingle />} />
      <Route path='/woman/:id' element={<WomenWearSingle />} />
      <Route path='fridge/:id' element={<FridgeSingle />} />
      <Route path='/kitchen/:id' element={<KitchenSingle />} />
      <Route path='/speakers/:id' element={<SpeakerSingle />} />
      <Route path='/tv/:id' element={<TVSingle />} />

      {/* Add other routes as needed */}
      <Route path='/cart' element={<UserCart />} />


     </Routes>
     {/* </BrowserRouter> */}
    </div>
  )
}

export default App
