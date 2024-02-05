import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import getSession from '@/utils/getSession'

function CarCard({ car }) {

    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();
            setIsLoggedIn(!!session);
        };

        checkSession();
    }, []);
    
    const handleDelete = async(car) => {
        console.log("handle delete called")
        const hasConfirmed = confirm("Are you sure you want to delete this car?");
        if (hasConfirmed) {
            try {
                console.log("handle delete performed")
                await fetch(`/api/car/${car._id.toString()}`, {
                    method: "DELETE",
                })
            } catch(error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="flex flex-col items-center mx-12 w-[525px] h-fit border-4 border-stone-400 border-3 bg-stone-200">
            <p className="font-nunito font-extrabold text-2xl mt-9">
                <img className="inline mb-1 mr-1" src="/price-icon.png" alt="" />
                {car.price} AED / DAY
            </p>
            <img className="mt-[40px] object-cover w-[450px] h-[250px]" src={car.imageLink} alt="RS6 Image"/>
            <div className="mt-[55px] w-[415px] flex flex-row justify-between pb-3 border-b-2 border-black">
                <h3 className="font-raleway font-bold text-3xl">{car.name}</h3>
                <button 
                    onClick = {() => {
                        router.push(`/car/${car._id}`)
                    }}
                    className="button-animate w-[170px] h-[35px] text-white rounded-md"
                > Book Now </button>
            </div>
            <div className="text-xl w-[415px] mt-[25px]">
                <p className="mb-[2px]">
                    <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/engine-icon.png" alt="Engine icon" />
                    <span className="font-bold">Torque:</span> {car.torque} HP
                </p>
                <p className="mb-[2px]">
                    <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/speedo-icon.png" alt="speedometer icon" />
                    <span className="font-bold">Max Speed:</span> {car.maxSpeed} KM/H
                </p>
                <p className="mb-[2px]">
                    <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/seat-icon.png" alt="seats icon" />
                    <span className="font-bold">Seats:</span> {car.seats}
                </p>
                <p className="mb-[2px] mb-2">
                    <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/avaliable-icon.png" alt="seats icon" />
                    <span className="text-green-700 font-bold">{car.avaliability ? `Avaliable` : `Unavaliable`}</span>
                </p>
                {isLoggedIn == true ? (
                    <div className='flex flex-row justify-center mb-3'>
                        <button className='button-animate w-[170px] h-[35px] text-white rounded-md mx-5'
                            onClick={() => {
                                router.push(`/edit-car?id=${car._id}`);
                            }}
                        >
                            Edit Car
                        </button>
                        <button  className='button-animate w-[170px] h-[35px] text-white rounded-md'
                            onClick={() => {
                                handleDelete(car)
                            }}
                        >
                            Delete Car
                        </button>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default CarCard