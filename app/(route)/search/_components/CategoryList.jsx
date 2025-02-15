import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const CategoryList = () => {
    const [categoryList, setcategoryList] = useState([])
    useEffect(() => {
      getCategoryList()
    }, [])
    
    const getCategoryList=()=>{
        GlobalApi.getCategory().then(resp=>{
            console.log(resp.data)
        })
    }
  return (
    <div>CategoryList</div>
  )
}

export default CategoryList