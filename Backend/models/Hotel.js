import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        type: {
            type: String,
            required: true,
        },
        country: {
            type: String,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
        },
        distance: {
            type: [String],
        },
        photos: {
            type: [String],
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        rooms: {
            type: [String],
        },
        cheapestPrice: {
            type: Number,
            required: true,
        },
        featured: {
            type: String,
            default: false,
        },
    },
    {
        timestamps: true
    }
);

export default mongoose.model("Hotel", HotelSchema);