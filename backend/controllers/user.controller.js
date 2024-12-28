import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try{ 
        const loggedInUserId = req.user._id;
        const filtredUsers = await User.find({_id: { $ne: loggedInUserId}}).select("-password");
        res.status(200).json(filtredUsers); 
    } catch (error) {
        console.log("Error on getUsersForSidebar ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}