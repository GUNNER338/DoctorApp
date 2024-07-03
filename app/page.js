import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './_component/Hero'
import CategorySearch from './_component/CategorySearch'
import DoctorList from './_component/DoctorList'

const page = () => {
  return (
    <>
    {/* //Hero Section */}
    <Hero/>

    {/* Search Doctor */}
    <CategorySearch/>

    {/* Doctor Name List  */}
    <DoctorList/>
    </>
  )
}

export default page