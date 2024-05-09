import React from 'react'
import { EsData } from '../../data/data'
import { Link } from 'react-router-dom'

const Project = () => {
  const info = EsData.portfolio.projects
  return (
    <div className=' xl:w-[1140px] gap-8'>
      <div className='flex flex-col px-4 xl:px-0 md:grid md:grid-cols-2 xl:grid-cols-3 gap-8'>

        {info.map((data, index) => (
          <Link to={data.url} target='_blank' key={index} className=''>
            <img src={data.img} alt={data.name} className='w-full rounded-t-lg' />
            <div className='bg-greyBrand300 py-3 px-4 flex flex-col gap-2 rounded-b-lg'>
              <p className='text-orangeBrand200 text-xl font-medium'>{data.name}</p>
              <p className='t text-ligthBrand200 '> - {data.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Project
