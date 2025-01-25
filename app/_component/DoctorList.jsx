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
    <div className=" px-8">
      <h1 className="font-bold mb-6">Popular Doctors</h1>
      <div className="flex grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-7; ">
        {doctorList.length > 0 &&
          doctorList.map((item, index) => (
            <div key={index} className="border-[1px]rounded-lg p-3">
              <Image
                src={item.image.url}
                height={300}
                width={300}
                className="h-[300px] w-80 object-cover rounded-lg"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorList;
