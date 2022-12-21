import express from "express";
import { addUser ,getUser} from "../controller/userController.js";

const router = express.Router();
router.post('/adduser',addUser);
router.get('/getuser', getUser);

export default router ;