import express from "express";
const router = express.Router()

import { createHotel } from "../controllers/hotel.js";

router.post("/", createHotel);

export default router;