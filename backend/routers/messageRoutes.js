const express = require("express");
const router = express.Router();
const {
    sendMessage,
    getAllMessages,
    deleteMessage,
    getSingleMessage
} = require("../controllers/messageController");

router.post("/", sendMessage);
router.delete("/:id", deleteMessage);
router.get("/:id", getSingleMessage);
router.get("/", getAllMessages);


module.exports = router;