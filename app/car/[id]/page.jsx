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
        <div>
            <section>
                <div className='red-color w-full h-[435px]'>
                </div>
                <div className='red-color w-full h-[13px] mt-1'>
                </div>
                <div className='red-color w-full h-[23px] mt-2'>
                </div>
                <h1>{car.name}</h1>
            </section>
        </div>
    )
}

export default CarPage