import Car from "@/models/Car"
import { connectToDB } from "@/utils/mongodb"

export const POST = async (request) => {
    const { price, imageLink, desc, name, torque, maxSpeed, seats, avaliability } = await request.json();

    try {
        await connectToDB();
        const newCar = new Car({ price, imageLink, desc, name, torque, maxSpeed, seats, avaliability })

        await newCar.save();
        return new Response(JSON.stringify(newCar), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new car", { status: 500 })
    }
}