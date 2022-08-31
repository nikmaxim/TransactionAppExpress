const express = require("express");
const { errorHandler } = require("../middlewares/error");

const authRoutes = require("./auth.routes");

const router = express.Router();
router.use("/auth", authRoutes);
router.use(errorHandler);

module.exports = router;
