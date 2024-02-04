import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function CarCard({ car }) {

const router = useRouter()
  return (
    <div className="flex flex-col items-center w-[525px] h-[590px] border-4 border-stone-400 border-3 bg-stone-200">
        <p className="font-nunito font-extrabold text-2xl mt-9">
            <img className="inline mb-1 mr-1" src="/price-icon.png" alt="" />
            {car.price} AED / DAY
        </p>
        <Image className="mt-[40px]" width={460} height={200} src={car.imageLink} alt="RS6 Image"></Image>
        <div className="mt-[55px] w-[415px] flex flex-row justify-between pb-3 border-b-2 border-black">
            <h3 className="font-raleway font-bold text-3xl">{car.name}</h3>
            <button 
                onClick = {() => {
                    router.push(`/car/${car._id}`)
                }}
                className="button-animate w-[170px] h-[35px] text-white rounded-md"
            >
                Book Now
            </button>
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
            <p className="mb-[2px]">
                <img className="inline mr-[10px] pb-[5px]" width="25" height="25" src="/avaliable-icon.png" alt="seats icon" />
                <span className="text-green-700 font-bold">{car.avaliability ? `Avaliable` : `Unavaliable`}</span>
            </p>
        </div>
    </div>
  )
}

export default CarCard