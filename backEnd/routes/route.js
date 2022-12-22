import express from "express";
import { addUser ,deleteUser,getUser} from "../controller/userController.js";

const router = express.Router();
router.post('/adduser',addUser);
router.get('/getuser', getUser);
router.delete('/:id',deleteUser);

export default router ;