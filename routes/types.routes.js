import { Router } from "express";
import { createTypes, getTypes } from "../controllers/types.controller.js";

const router = Router();

router.get('/',getTypes);
router.post('/',createTypes);
// router.get()
export default router;