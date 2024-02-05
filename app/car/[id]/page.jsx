'use client'
import React, { useEffect, useState } from 'react'

function CarPage({params}) {

    const carId = params.id
    const [car, setCar] = useState([])

    useEffect(() => {
        const fetchCar = async () => {
            const response = await fetch(`/api/car/${carId}`)
            const data = await response.json()

            setCar(data);
        }
        if(params?.id) fetchCar();
    }, [params.id])
    
    return (
        <div className=''>
            <div className='text-white relative'>
                <section className='red-color w-full h-[435px] font-russo pl-[125px] pt-16'>
                    <div className='w-[600px] h-80 flex flex-col justify-evenly'>
                        <h1 className='text-6xl tracking-[3px]'>{car.name}</h1>
                        <p className='text-3xl tracking-[3px]'>{car.desc}</p>
                        <hr className='h-[4px] my-2' />
                        <p className='text-xl'>Torque: 621 HP</p>
                        <p className='text-xl'>Max Speed: 302 KM/H</p>
                        <p className='text-xl'>Seats: 5</p>
                    </div>
                </section>
                <div className='red-color w-full h-[13px] mt-1'>
                </div>
                <div className='red-color w-full h-[23px] mt-2'>
                </div>
                <img className='object-cover w-[1000px] h-[500px] absolute top-20 right-8' src="/rs6.png" alt="" />
            </div>

            <button className='text-black button-animate-white w-80 h-24 text-2xl ml-52 mt-20 mb-40'>Book the car</button>
            <div className='w-full h-[4px] bg-black'></div>
            
            <div className='font-nunito w-full h-[500px] flex flex-row justify-between items-center tracking-[4px]'>
                <div className='flex flex-col ml-52'>
                    <label className='text-[40px] mb-2 font-bold'>Write your e-mail:</label>
                    <input className='bg-white border-[3px] border-black border w-[550px] h-[70px] text-2xl pl-4' type="text" />
                </div>
                <div className='flex flex-col items-center mr-52'>
                    <p className='font-nunito font-bold text-[45px] mb-5'>Total: 1050 AED</p>
                    <button className='button-animate text-white text-3xl w-64 h-20'>Pay by card</button>
                </div>
            </div>
        </div>
    )
}

export default CarPage