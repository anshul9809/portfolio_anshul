const User = require("../models/User");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

module.exports.authMiddleware = expressAsyncHandler(async (req,res, next)=>{
    try {
        const { portfolio_token } = req.cookies;
        if (!portfolio_token) {
            res.status(401);
            throw new Error("Session expired, please login again.");
        }

        const decoded = jwt.verify(portfolio_token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            res.status(404);
            throw new Error("User not found.");
        }

        next();
    } catch (error) {
        console.log("error is ", error);
        res.status(401);
        throw new Error("Not authorized, token failed.");
    }

});