'use client'
import Image from "next/image";
import CarCard from "@/components/CarCard";
import { useEffect, useState } from "react";

const CarCardsList = ({data}) => {
  return (
    <div className="flex flex-row justify-center mb-52">
      {data.map((car) => (
        <CarCard 
          key={car._id}
          car={car}
        />
      ))}
    </div>
  )
}

export default function Home() {

  const [allCars, setAllCars] = useState([])

  const fetchCars = async() => {
    const response = await fetch('/api/car')
    const data = await response.json();

    setAllCars(data)
  }

  useEffect(() => {
    fetchCars();
  }, [])

  return (
    <div>
      <div className="mt-20 flex flex-row justify-between">
        <Image src={"/hero-image.png"} width={1120} height={564} alt="jaguar image"></Image>
        <section className="flex flex-col justify-between w-[637px] mr-[50px] h-[380px]">
          <h2 className="text-6xl font-russo tracking-widest">One of the biggest sportcar rentals in Dubai</h2>
          <p className="text-3xl font-russo text-stone-500">We will make every ride of yours - <span className="red-text">unforgetable</span></p>
        </section>
      </div>
      <div className="flex flex-col items-center">
        <button className="mx-auto w-[280px] h-[80px] button-animate  text-white text-2xl mb-20 mt-10">Browse Cars</button>
        <hr className="w-[1000px] red-color h-[4px]"/>
      </div>

      <h2 className="font-raleway text-4xl text-center font-bold mb-5 mt-20">Car Catalogue</h2>
      <p className="font-raleway text-3xl text-center mb-[75px]">Your driving journey starts here</p>

      {/* Car Cards */}

      <CarCardsList data={allCars} />

    </div>
  )
}
