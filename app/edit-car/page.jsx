'use client'
import React, { useEffect, useState } from 'react'

import Form from '@/components/Form'
import { useRouter, useSearchParams } from 'next/navigation'

function EditCar() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const carId = searchParams.get("id")

    const [submitting, setIsSubmitting] = useState(false);
    const [car, setCar] = useState({ 
        price: 0, 
        imageLink: "", 
        name: "", 
        torque: 0, 
        maxSpeed: 0, 
        seats: 0,
        avaliability: false
    })

    useEffect(() => {
        const getCarDetails = async () => {
            const response = await fetch(`/api/car/${carId}`);
            const data = await response.json();

            setCar(data)
        }
        if (carId) getCarDetails();
    }, [carId])

    const editCar = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!carId) return alert("Missing Car ID!")

        try {
            const response = await fetch(`/api/car/${carId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    price: car.price, 
                    imageLink: car.imageLink, 
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
            type='Edit'
            car={car}
            setCar={setCar}
            submitting={submitting}
            handleSubmit={editCar}
        />
    )
}

export default EditCar