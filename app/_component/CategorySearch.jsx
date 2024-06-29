"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

const CategorySearch = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp?.categories);
      console.log(resp?.categories);
    });
  };

  return (
    <div className="mb-7 flex items-center flex-col gap-4">
      <h2 className="text-4xl font-bold">
        Search <span className="text-primary">Doctor</span>
      </h2>
      <p className="text-gray-500">
        Search Your Doctor and Book Appointment on one Website.
      </p>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="email" className="border-black" placeholder="Search" />
        <Button type="submit">Search</Button>
      </div>
      {/* Category Section */}  
      <div className="grid grid-cols-3
       md:grid-cols-4 lg:grid-cols-6">
      {categoryList.length > 0 && categoryList.map((item, index) => index<6 &&(
          <div key={index} className="flex flex-col text-center gap-2 items-center mt-10 p-5 bg-blue-50 rounded-md m-3 hover:scale-105 transition-all ease-in-out"> 
            <Image src={item.image.url} alt={item.name} height={40} width={40}/>
            {/* <img src={item.image.url} alt={item.name} height={200} width={200}/> */}
            <p className="font-medium text-blue-600">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySearch;
