import { Router } from "express";
import { createDevice, deleteDevice, getAllDevices, getDeviceById, udpateDevice } from "../controllers/device.controller.js";

const router = Router();

router.get('/',getAllDevices);
router.get('/:id',getDeviceById);
router.post('/',createDevice);
router.put('/:id',udpateDevice);
router.delete('/:id',deleteDevice);


export default router