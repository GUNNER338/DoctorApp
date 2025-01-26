"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";

const DoctorList = () => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getAllDoctors();
  }, []);

  const getAllDoctors = () => {
    GlobalApi.getDoctor().then((resp) => {
      setDoctorList(resp?.doctors);
      console.log(resp?.doctors);
    });
  };

  return (
    <div className=" px-8 ">
      <h1 className="font-bold text-xl mt-20 mb-3 flex items-center justify-center">Popular<text className="text-primary ml-1 ">Doctors</text></h1>
      <div className="flex grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-7 items-center justify-center">
        {doctorList.length > 0 &&
          doctorList.map((item, index) => (
            <div key={index} className="border-[1px]rounded-lg p-3 cursor-pointer border border-green-950-950">
              <Image
                src={item.image.url}
                height={300}
                width={300}
                className="h-[300px] w-80 object-cover rounded-lg"
              />
              <div className="mt-3 flex items-baseline flex-col">
                <h2 className="text-[11px] font-bold bg-blue-100 p-1 px-2  rounded-sm text-primary">{item?.role}</h2>
                <h4 className="text-[20px] font-semibold">{item?.name}</h4>
                <h4 className="text-[15px] font-medium text-primary">{item?.yearOfExperience}</h4>
                <h4 className="text-sm text-gray-500 font-normal">{item?.address}</h4>

                {/* Button */}
                <h2 className="bg-primary text-white px-5 py-1 rounded-full mt-4 cursor-pointer hover:bg-blue-400  text-sm">Book Now</h2>
              </div>
            </div>
            
          ))}
      </div>
    </div>
  );
};

export default DoctorList;
