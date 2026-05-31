import mongoose, { model } from "mongoose";
import { type } from "os";

const deviceSchema = mongoose.Schema({
  model: {
    type: String,
    required: [true, "Model is required"],
    trim: true,
    minlength: [2, "Model must be at least 2 characters"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Type",
    required: true,
  },
  imageUrl: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Available", "Assigned", "Damaged", "Lost"],
  },
  description: {
    type: String,
  },
});

const Devices = mongoose.model("Device", deviceSchema);
export default Devices;
