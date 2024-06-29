import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Span } from "next/dist/trace";
const Hero = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt=""
                src="/doctor.png"
                width={800}
                height={800}
                className="absolute inset-0 h-full w-full object-cover rounded-3xl"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Get Check by a <span className="text-primary">Best Doctor</span>
              </h2>

              <p className="mt-4 text-gray-600 font-normal">
                Welcome to My Health 🧑‍⚕️, your go-to for hassle-free doctor
                appointments. Connect with top-rated local healthcare
                professionals across various specialties. Browse profiles, read
                reviews, and book your appointment in just a few clicks. Whether
                it's a routine check-up or urgent care, My Health ensures a
                seamless experience. Join us today for exceptional medical care
                at your fingertips.
              </p>
            <Button className="my-4">Explore Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
