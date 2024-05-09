import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Body from './pages/Body'
import Footer from './components/footer/Footer'

function App () {
  function LayoutWithNavbar () {
    return (
      <div className='font-Quicksand scroll-smooth'>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutWithNavbar />}>
          <Route path='/' element={<Body />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
