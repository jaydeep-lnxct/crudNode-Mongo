import express from "express";
import { addUser ,deleteUser,getUser} from "../controller/userController.js";

const router = express.Router();
router.post('/adduser',addUser);
router.get('/getuser', getUser);
router.post('/delete',deleteUser);

export default router ;