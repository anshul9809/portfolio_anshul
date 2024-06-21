const mongoose = require("mongoose");

const TimelineSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required!"],
    },
    description: {
        type: String,
        required: [true, "Description Required!"],
    },
    timeline: {
        from: {
            type: String,
        },
        to: {
            type: String,
        },
    },
},{
    timestamps:true
});


module.exports = mongoose.model("Timeline", TimelineSchema);