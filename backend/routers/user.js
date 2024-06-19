const express = require("express");
const router = express.Router();

// starting the user router
router.get("/", (req, res) => {
    res.send("working");
});

module.exports = router;