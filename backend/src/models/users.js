const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        id: { type: Number },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        age: { type: Number, default: 18, required: true },
        gender: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        username: { type: String, required: true },
        passwordHash: { type: String, required: true },
        passwordSalt: { type: String, required: true },
        birthDate: { type: Date, required: true },
        image: {
            type: String,
            default: "https://robohash.org/hicveldicta.png",
        },
    },
    { collection: "users", timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
