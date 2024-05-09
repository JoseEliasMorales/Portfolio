import React from 'react'
import { EsData } from '../../data/data'

const Contact = () => {
  const info = EsData.contact
  return (
    <section id='Contact' className='flex flex-col items-center justify-center py-10 gap-8'>
      <h3 className='text-greyBrand100 text-[40px] font-medium'>{info.title}</h3>
      <form className='w-[80%] xl:w-[570px] flex flex-col gap-6'>
        <input type='text' placeholder={info.labelName} className='font-Quicksand border-2 border-ligthBrand100 rounded-md py-[10px] font-medium placeholder:text-ligthBrand100 focus:border-orangeBrand200 focus:shadow-md focus:shadow-orangeBrand200 outline-none text-greyBrand500 pl-3 w-full' />
        <div className='w-full flex flex-col md:flex-row  gap-6'>
          <input type='email' placeholder={info.labelEmail} className='w-full font-Quicksand border-2 border-ligthBrand100 rounded-md py-[10px] font-medium outline-none placeholder:text-ligthBrand100 text-greyBrand500 pl-3  focus:border-orangeBrand200 focus:shadow-md focus:shadow-orangeBrand200' />
          <input type='text' placeholder={info.labelSubject} className='w-full font-Quicksand border-2 border-ligthBrand100 rounded-md py-[10px] font-medium outline-none placeholder:text-ligthBrand100 text-greyBrand500 pl-3  focus:border-orangeBrand200 focus:shadow-md focus:shadow-orangeBrand200' />
        </div>
        <textarea placeholder={info.lamelMessagge} className='font-Quicksand border-2 border-ligthBrand100 rounded-md py-[10px] font-medium placeholder:text-ligthBrand100 outline-none text-greyBrand500 pl-3 w-full h-32  focus:border-orangeBrand200 focus:shadow-md focus:shadow-orangeBrand200' />
      </form>
      <button className='bg-orangeBrand200 border-white border-2 rounded-md py-[10px] px-[30px] font-medium text-ligthBrand300 shadow-sm shadow-black'>{info.btn}</button>
    </section>
  )
}

export default Contact
