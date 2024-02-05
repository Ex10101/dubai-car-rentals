import Link from "next/link";

const Form = ({ type, car, setCar, submitting, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="number" 
                value={car.price} 
                onChange={(e) => setCar({...car, price: e.target.value})}
            />
            <input 
                type="text" 
                value={car.imageLink} 
                onChange={(e) => setCar({...car, imageLink: e.target.value})}
            />
            <input 
                type="text" 
                value={car.desc} 
                onChange={(e) => setCar({...car, desc: e.target.value})}
                placeholder="desc"
            />
            <input 
                type="text" 
                value={car.name} 
                onChange={(e) => setCar({...car, name: e.target.value})}
            />
            <input 
                type="number" 
                value={car.torque} 
                onChange={(e) => setCar({...car, torque: e.target.value})}
            />
            <input 
                type="number" 
                value={car.maxSpeed} 
                onChange={(e) => setCar({...car, maxSpeed: e.target.value})}
            />
            <input 
                type="number" 
                value={car.seats} 
                onChange={(e) => setCar({...car, seats: e.target.value})}
            />
            <input 
                type="checkbox" 
                checked={car.avaliability}
                onChange={(e) => setCar({...car, avaliability: e.target.checked})}
            />
            <button type="submit" disabled={submitting}>{submitting ? `${type}ing...` : type}</button>
        </form> 
    )
}

export default Form;