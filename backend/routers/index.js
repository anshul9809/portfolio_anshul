const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));
router.use("/message", require("./messageRoutes"));
router.use("/timeline", require("./timelineRoutes"));

module.exports = router;