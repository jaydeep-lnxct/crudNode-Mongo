import User from "../modal/userSchema.js";

export const addUser = async (request, response) => {
    const user = request.body;
    const newUser = new User(user)
    try {
        await newUser.save();
        response.status(201).json(newUser)
    }
    catch (err) {
        console.log(err)
        response.status(409).json({ message: err.message })
    }
};

export const getUser = async (req, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users)
    } catch (error) {
        console.log(error)
        response.status(404).json({ message: error.message })
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body._id })
        res.status(200).json({ success: true });
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

export const getSingleUser = async (req, res) => {
    try {
        console.log(req.params.id);
        const user = await User.findOne({_id:req?.params?.id});
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }
};

export const editUser = async (req, res) => {
    const user = req.body;
    const edituser = new User(user)
    try {
        await User.updateOne({_id:req.params.id},edituser)
        res.status(201).json(edituser)
    } catch (error) {
        console.log('error',error)
        res.status(406).json({ message: error.message })
    }
};

