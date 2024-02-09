import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import { Route,Routes } from 'react-router-dom'

function AllRoutes() {

  return (
    <>
      <Routes>
        <Route path='/Home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </>
  )
}

export default AllRoutes;
