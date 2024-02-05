'use client'
import React, { useState } from 'react'

import Form from '@/components/Form'
import { useRouter } from 'next/navigation'

function CreateCar() {
    const router = useRouter();

    const [submitting, setIsSubmitting] = useState(false);
    const [car, setCar] = useState({ 
        price: 0,
        imageLink: "", 
        desc: "", 
        name: "", 
        torque: 0, 
        maxSpeed: 0, 
        seats: 0,
        avaliability: false
    })

    const createCar = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/car/new", {
                method: "POST",
                body: JSON.stringify({
                    price: car.price, 
                    imageLink: car.imageLink,
                    desc: car.desc, 
                    name: car.name, 
                    torque: car.torque, 
                    maxSpeed: car.maxSpeed, 
                    seats: car.seats,
                    avaliability: car.avaliability
                })
            })
            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form 
            type='Create'
            car={car}
            setCar={setCar}
            submitting={submitting}
            handleSubmit={createCar}
        />
    )
}

export default CreateCar