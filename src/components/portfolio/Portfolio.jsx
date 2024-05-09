import React from 'react'
import { EsData } from '../../data/data'
import Project from './Project'

const Portfolio = () => {
  const info = EsData.portfolio
  return (
    <section id='Portfolio' className='w-full h-screen flex flex-col items-center justify-center bg-slate-200 gap-8'>
      <div className='flex flex-col items-center'>
        <p className='text-greyBrand100 text-xs font-medium'>{info.title}</p>
        <p className='text-greyBrand100 text-[40px] font-medium'>{info.description}</p>
        <div />
      </div>
      <Project />
    </section>
  )
}

export default Portfolio
