import { Router } from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";

import {
    getDashboardStats
} from "../controllers/admin.controller.js";

const router = Router();

router.route("/dashboard")
.get(
    verifyJWT,
    verifyAdmin,
    getDashboardStats
);

export default router;