import React from 'react'
import { me } from '../../assets'
import { EsData } from '../../data/data'

const About = () => {
  const info = EsData.about
  return (
    <section id='About' className=' w-full h-screen flex flex-col items-center justify-center bg-slate-200'>
      <div className='flex items-center w-[1140px] justify-around'>
        <img src={me} alt='me' className='min-w-[300px] h-[300px] rounded-full object-cover' />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <p className='text-[40px] font-medium'>{info.name}</p>
            <p className='text-orangeBrand200 text-xl font-medium '>{info.job}</p>
          </div>
          <p className='text-greyBrand200 w-[570px]'>{info.description}</p>
        </div>
      </div>
      <div className='py-4  mt-20 flex flex-col items-center gap-4 bg-blackBrand100 w-full'>
        <h2 className='text-ligthBrand200 text-[40px] font-medium'>{info.skills.title}</h2>
        <div className='flex justify-around w-full'>
          {
                info.skills.skills.map((data, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <img src={data.img} alt={data.name} className='w-20' />
                    <p className='font-medium text-greyBrand100'>{data.name}</p>
                  </div>
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default About
