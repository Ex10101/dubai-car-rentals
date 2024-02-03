import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String, // Car name
  price: Number, // Price per day
  imageLink: String, // URL to car image
  torque: String, // Car torque
  maxSpeed: Number, // Maximum speed
  seats: Number, // Number of seats
  availability: Boolean, // Availability status
});

// Prevent model overwrite upon recompilation
const Car = mongoose.models.Car || mongoose.model('Car', carSchema);

export default Car;