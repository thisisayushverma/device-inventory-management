import Types from "../models/type.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Devices from "../models/device.model.js";
import mongoose, { model } from "mongoose";

const createDevice = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const { model, company, price, typeId, imageUrl, status, description } =
    req.body;

  if (!model || !company || !price || !typeId || !status || !description) {
    return res.status(400).json({
      error: "Invalid Credentials",
      status: 400,
      success: false,
    });
  }

  // check typeId is correct or not

  const checkTypeId = await Types.find({
    id: typeId,
  });

  if (!checkTypeId) {
    return res.status(404).json({
      error: "Types is not found..",
      status: 404,
      success: false,
    });
  }

  const createDevice = await Devices.create({
    model,
    company,
    price,
    imageUrl,
    status,
    description,
    typeId,
  });

  console.log("Created Device -", createDevice);

  return res.status(201).json({
    data: createDevice,
    status: 201,
    success: true,
  });
});

const getDeviceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      error: "Invalid Id",
      status: 400,
      success: false,
    });
  }

  const getDevice = await Devices.findById(id).populate("typeId", "name");

  if (!getDevice) {
    return res.status(404).json({
      error: "Device not found",
      status: 404,
      success: false,
    });
  }

  return res.status(200).json({
    data: getDevice,
    status: 200,
    success: true,
  });
});

const getAllDevices = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = req.query.search || "";
  const terms = search.trim().split(/\s+/);
  console.log(terms);

  const filter = {};

  if (search) {
    filter.$and = terms.map((term) => ({
      $or: [
        { model: { $regex: term, $options: "i" } },
        { company: { $regex: term, $options: "i" } },
      ],
    }));
  }

  console.log(filter);

  const devices = await Devices.find(filter)
    .populate("typeId", "name")
    .skip((page - 1) * limit)
    .limit(limit);

  return res.status(200).json({
    success: true,
    data: devices,
  });
});

const deleteDevice = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      status: 400,
      error: "Invalid device id",
      success: false,
    });
  }

  const deleteDevice = await Devices.findByIdAndDelete(id, {
    new: true,
  });
  console.log("delete User-", deleteDevice);
  if (!deleteDevice) {
    return res.status(404).json({
      error: "Device not found",
      success: false,
      status: 404,
    });
  }

  return res.status(200).json({
    status: 200,
    success: true,
    data: "Device has been deleted",
  });
});

const udpateDevice = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      error: "Invalid device id.",
      status: 400,
    });
  }

  const device = await Devices.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!device) {
    return res
      .status(404)
      .json({ error: "Device not found", success: false, status: 404 });
  }

  return res.status(200).json({
    success: true,
    data: device,
    status: 200,
  });
});

export {
  createDevice,
  getDeviceById,
  getAllDevices,
  deleteDevice,
  udpateDevice,
};
