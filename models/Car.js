import { Schema, model, models } from 'mongoose';

const CarSchema = new Schema({
  price: Number,
  imageLink: String,
  desc: String,
  name: String,
  torque: Number,
  maxSpeed: Number,
  seats: Number,
  avaliability: Boolean
});

const Car = models.Car || model('Car', CarSchema);

export default Car;