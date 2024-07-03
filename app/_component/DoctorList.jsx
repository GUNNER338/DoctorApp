"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image'

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    getAllDoctors();
  }, [])
  

  const getAllDoctors=()=>{
    GlobalApi.getDoctor().then((resp) => {
      setDoctorList(resp?.doctors);
      console.log(resp?.doctors);
  });
};

  return (
    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7'>
      {
        doctorList.length > 0 && doctorList.map((item,index)=>(
          <div key={index}>
            <Image src={item.image.url} height={500} width={500} className='h-[200] w-full object-cover rounded-lg '/>
          </div>
        ))}
    </div>
  )
}

export default DoctorList