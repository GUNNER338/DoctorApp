"use client"
import React, { useEffect } from 'react'

function Details({params}) {
  useEffect(() => {
    console.log(params)
  }, [])
  
  return (
    <div>Details</div>
  )
}

export default Details