import React, { useEffect, useState } from 'react'
import { me } from '../../assets'
import { EsData } from '../../data/data'

const About = () => {
  const info = EsData.about
  const [infoDescription, setInfoDescription] = useState(info.description)

  useEffect(() => {
    const newText = infoDescription.replace(/\n/g, '<br />')
    setInfoDescription(newText)
  }, [])
  return (
    <section id='About' className=' w-full xl:h-screen flex flex-col items-center justify-center bg-slate-200 py-10  '>
      <div className='flex flex-col xl:flex-row items-center gap-4 xl:gap-0 xl:w-[1140px] justify-around'>
        <img src={me} alt='yo' className='w-[150px] h-[150px] md:w-[220px] md:h-[220px]   xl:min-w-[300px] xl:h-[300px] rounded-full object-cover' />
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col items-center xl:items-start gap-2'>
            <p className='text-3xl md:text-[40px]  font-medium'>{info.name}</p>
            <p className='text-orangeBrand200 text-xl font-medium '>{info.job}</p>
          </div>
          <p className='text-greyBrand200 w-[80%] self-center text-center xl:text-start  md:w-[570px] whitespace-pre-wrap '>{info.description}</p>
        </div>
      </div>
      <div className='py-4  mt-20 flex flex-col items-center gap-4 bg-blackBrand100 w-full'>
        <h2 className='text-ligthBrand200 text-[40px] font-medium'>{info.skills.title}</h2>
        <div className='grid grid-cols-2 gap-y-4 items-center md:flex md:py-10 xl:py-0  md:justify-around w-full md:ml-[70px] md:pr-[70px]'>
          {
                info.skills.skills.map((data, index) => (
                  <div key={index} className='flex flex-col items-center  last:col-span-2'>
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
