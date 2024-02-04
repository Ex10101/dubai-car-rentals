import Car from "@/models/Car";
import { connectToDB } from "@/utils/mongodb";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const car = await Car.findById(params.id)
        if(!car) return new Response("Car not found", { status: 400 })

        return new Response (JSON.stringify(car), { status: 200 })
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 })
    }
    
}

export const PATCH = async (request, { params }) => {
    const { price, imageLink, name, torque, maxSpeed, seats, avaliability } = await request.json();

    try {
        await connectToDB();

        // Find the existing car by ID
        const existingCar = await Car.findById(params.id);

        if (!existingCar) {
            return new Response("Car not found", { status: 404 });
        }

        // Update the car with new data
        existingCar.price = price;
        existingCar.imageLink = imageLink;
        existingCar.name = name;
        existingCar.torque = torque;
        existingCar.maxSpeed = maxSpeed;
        existingCar.seats = seats;
        existingCar.avaliability = avaliability;

        await existingCar.save();

        return new Response("Successfully updated the CAR", { status: 200 });
    } catch (error) {
        return new Response("Error Updating CAR", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the prompt by ID and remove it
        await Car.findByIdAndDelete(params.id)

        return new Response("Car deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting car", { status: 500 });
    }
};