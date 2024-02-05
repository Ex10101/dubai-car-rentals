import Link from "next/link";

const Form = ({ type, car, setCar, submitting, handleSubmit }) => {
    return (
        <form className="w-full h-[100vh] flex flex-col items-center justify-center" onSubmit={handleSubmit}>
            <h1 className="font-russo font-bold text-4xl mb-4">Add a new car</h1>
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car price:</label>
            <input
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4' 
                type="number" 
                value={car.price} 
                onChange={(e) => setCar({...car, price: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car image link:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="text" 
                value={car.imageLink} 
                onChange={(e) => setCar({...car, imageLink: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car description:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="text" 
                value={car.desc} 
                onChange={(e) => setCar({...car, desc: e.target.value})}
                placeholder="desc"
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car name:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="text" 
                value={car.name} 
                onChange={(e) => setCar({...car, name: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car torque:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="number" 
                value={car.torque} 
                onChange={(e) => setCar({...car, torque: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car max speed:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="number" 
                value={car.maxSpeed} 
                onChange={(e) => setCar({...car, maxSpeed: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Enter car seats value:</label>
            <input 
                className='bg-white mb-6 border-[3px] border-black border w-[300px] h-[50px] text-xl pl-4'
                type="number" 
                value={car.seats} 
                onChange={(e) => setCar({...car, seats: e.target.value})}
            />
            <label className='text-[20px] mb-2 font-bold' htmlFor="">Is the car avaliable?</label>
            <input 
                className="w-10 h-10"
                type="checkbox" 
                checked={car.avaliability}
                onChange={(e) => setCar({...car, avaliability: e.target.checked})}
            />
            <button className='text-black button-animate-white mt-5 w-[150px] h-[50px] text-2xl mb-8' type="submit" disabled={submitting}>{submitting ? `${type}ing...` : type}</button>
        </form> 
    )
}

export default Form;