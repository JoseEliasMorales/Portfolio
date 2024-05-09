import React from 'react'
import { bg } from '../../assets'
import { EsData } from '../../data/data'

const Home = () => {
  const info = EsData.home
  return (
    <section id='Home' className='w-full h-screen overflow-y-hidden relative bg-gradient-to-t from-inherit to-transparent'>
      <img src={bg} alt='' className='brightness-110 contrast-50 w-full h-full xl:h-auto object-cover' />
      <div className='absolute inset-0 top-1/4 xl:top-0 md:m-auto flex xl:justify-center items-center flex-col gap-2'>
        <p className='text-[48px] text-greyBrand100 z-[5] '>{info.title}</p>
        <p className='text-orangeBrand200 font-medium text-[32px] z-[5] '>{info.howIAm}</p>
        <h1 className=' z-[5] py-[10px] px-10 bg-orangeBrand100 font-semibold text-lg text-orangeBrand200 rounded-[40px]'>{info.job}</h1>
        <div className='absolute  w-full h-20 bottom-0 bg-gradient-to-b from-transparent  to-ligthBrand300 to-90% z-[4]' />
      </div>
    </section>
  )
}

export default Home
