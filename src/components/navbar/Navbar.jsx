import { EsData } from '../../data/data'
import { useState } from 'react'

const Navbar = () => {
  const info = EsData
  const [focused, setFocused] = useState(0)

  const handleFocused = (a) => {
    setFocused(a)
  }
  return (
    <nav className='fixed h-full bg-greyBrand300 w-20 flex flex-col items-center py-[15px] z-10'>
      {
            info.navbar.map((data, index) => (
              <a onClick={() => handleFocused(index)} href={`#${data.text}`} key={index} className={`relative btnNav flex flex-col items-center justify-center   text-ligthBrand200 w-full h-[70px] hover:bg-orangeBrand200 ${focused === index ? 'bg-orangeBrand200 ' : ''}`}>
                <img src={data.img} alt={data.text} className={`imgNav  w-8 ${focused === index ? 'transition-all scale-75' : ''}`} />
                <p className={` font-medium ${focused === index ? 'transition-all opacity-100 -translate-y-1' : 'translate-y-5 opacity-0'}`}>{data.text}</p>
              </a>
            ))
        }
    </nav>
  )
}

export default Navbar
