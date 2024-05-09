import { close, menu } from '../../assets'
import { EsData } from '../../data/data'
import { useState } from 'react'

const Navbar = () => {
  const info = EsData
  const [focused, setFocused] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleFocused = (a) => {
    setFocused(a)
  }

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='fixed w-full xl:h-full bg-greyBrand300 xl:w-20 flex md:flex-col items-center py-[15px] z-10'>
      <div className='w-full hidden xl:inline'>
        {
            info.navbar.map((data, index) => (
              <a onClick={() => handleFocused(index)} href={`#${data.text}`} key={index} className={`hidden relative btnNav xl:flex flex-col items-center justify-center   text-ligthBrand200 w-full h-[70px] hover:bg-orangeBrand200 ${focused === index ? 'bg-orangeBrand200 ' : ''}`}>
                <img src={data.img} alt={data.text} className={`imgNav  w-8 ${focused === index ? 'transition-all scale-75' : ''}`} />
                <p className={` font-medium ${focused === index ? 'transition-all opacity-100 -translate-y-1' : 'translate-y-5 opacity-0'}`}>{data.text}</p>
              </a>
            ))
        }
      </div>
      <div className='flex px-8 w-full items-center justify-between xl:hidden'>
        <p className='text-ligthBrand200 font-bold'>{info.about.name.toUpperCase()}</p>
        <button onClick={handleMenu} className=''>
          <img src={menuOpen ? close : menu} alt='menu' className='w-10' />
        </button>
      </div>

      {
        menuOpen &&
          <div className={`grid grid-cols-2  xl:hidden top-[70px] w-full  bg-greyBrand300 absolute place-content-start transition-all duration-500 ease-in-out ${menuOpen ? 'h-screen' : 'h-0'}`}>
            {
            info.navbar.map((data, index) => (
              <a onClick={handleMenu} href={`#${data.text}`} key={index} className={` relative btnNav flex flex-col items-center justify-center   text-ligthBrand200 w-full h-[70px] hover:bg-orangeBrand200 ${focused === index ? 'bg-orangeBrand200 ' : ''}`}>
                <img src={data.img} alt={data.text} className='imgNav  w-8 ' />
                <p className=' font-medium   '>{data.text}</p>
              </a>
            ))
          }
          </div>
      }

    </nav>
  )
}

export default Navbar
