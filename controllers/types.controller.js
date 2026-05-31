import { asyncHandler } from "../utils/asyncHandler.js";
import Types from "../models/type.model.js";

const getTypes = asyncHandler(async (req, res) => {

  const getAllType = await Types.find()
    

  return res.status(200).json({
    data: getAllType,
    success: true,
    status: 200,
  });
});

const createTypes = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      error: "Bad request",
      status: 400,
      success: false,
    });
  }

  const createType = await Types.create({ name });

  if (!createType) {
    return res.status(500).json({
      error: "Internal Server Error",
      status: 500,
      success: false,
    });
  }

  return res.status(201).json({
    data: createType,
    status: 201,
    success: true,
  });
});

export { createTypes, getTypes };
