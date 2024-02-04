import Car from "@/models/Car"
import { connectToDB } from "@/utils/mongodb"

export const GET = async (request) => {
    try {
        await connectToDB();

        const cars = await Car.find({});

        return new Response(JSON.stringify(cars), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all cars", { status: 500 })
    }
}