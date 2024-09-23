import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createHotel = async (req, res, next) => {
    const hotelId = req.params.hotelId
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id }
            })
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateone(
            { "roomNumber._id": req.params.id },
            {
                $push : {
                    "roomNumber.$.unavailableDates": req.body.dates
                },
            }
        )

        res.status(200).json("Room Status has been Updated")
    } catch (error) {
        next(error)
    }
};