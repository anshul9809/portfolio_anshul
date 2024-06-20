const User = require("../models/User");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

module.exports.authMiddleware = expressAsyncHandler(async (req,res, next)=>{
    const { token } = req.cookies;
    if (!token) {
        throw new Error("Session expired, Please Login again") ;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
});