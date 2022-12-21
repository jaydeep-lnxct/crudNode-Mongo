

import User from "../modal/userSchema.js";
export const addUser = async (request,response) => {
    const user = request.body;
    console.log( user)

    const newUser = new User(user)

    try {
        await newUser.save();
        response.status(201).json(newUser)
    }
    catch (err) {
        console.log(err)
        response.status(409).json({message: err.message})
    }
};