import React, { useEffect, useState } from 'react'
import { EsData } from '../../data/data'
import { Link } from 'react-router-dom'
import { love } from '../../assets'

const Footer = () => {
  const info = EsData.footer

  const [thisYear, setThisYear] = useState('')

  useEffect(() => {
    const year = new Date()
    setThisYear(year.getFullYear())
  }, [])

  return (
    <footer className='bg-blackBrand100 flex flex-col items-center justify-center py-10 gap-8'>
      <h2 className='text-greyBrand100 text-3xl md:text-[40px] font-medium'>{info.name}</h2>
      <div className='flex flex-col gap-10 justify-center items-center w-full'>
        <div className='flex flex-col gap-2 items-center'>
          <p className='text-greyBrand600 text-lg'>{info.followTitle}</p>
          <div className='flex'>
            {
                        info.follow.map((data, index) => (
                          <Link to={data.link} target='_blank' key={index}>
                            <img src={data.socialImg} alt={data.socialName} className='w-10' />
                          </Link>
                        ))
                    }
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-greyBrand600 text-lg'>{info.contactTitle}</p>
          <p className='text-white text-3xl md:text-[36px]'>{info.email}</p>
        </div>
        <div className='text-greyBrand600 text-sm md:text-base flex   md:gap-2 items-center flex-col md:flex-row '>
          <p className=''>
            {info.copyrigthYear} {thisYear}. {info.rigths}.
            <span className='hidden md:inline'> | </span>
          </p>
          <div className='flex gap-2 items-end'>
            <p>
              {info.done}
            </p>
            <img src={love} alt={info.love} />
            <p>
              {info.done2}
            </p>
            <a href='#Home' className='text-blue-300'>
              {info.done3}
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
