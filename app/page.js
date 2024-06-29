import { Button } from '@/components/ui/button'
import React from 'react'
import Hero from './_component/Hero'
import CategorySearch from './_component/CategorySearch'

const page = () => {
  return (
    <>
    {/* //Hero Section */}
    <Hero/>

    {/* Search Doctor */}
    <CategorySearch/>
    </>
  )
}

export default page