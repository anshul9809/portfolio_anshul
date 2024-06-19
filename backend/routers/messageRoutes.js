const express = require("express");
const router = express.Router();
const {
    sendMessage,
    getAllMessages,
    deleteMessage
} = require("../controllers/messageController");

router.post("/", sendMessage);
router.delete("/:id", deleteMessage);
router.get("/", getAllMessages);

module.exports = router;