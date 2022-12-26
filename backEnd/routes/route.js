import express from "express";
import { addUser ,deleteUser,getUser,getSingleUser,editUser} from "../controller/userController.js";

const router = express.Router();
router.post('/adduser',addUser);
router.get('/getuser', getUser);
router.post('/delete',deleteUser);
router.get('/:id',getSingleUser);
router.post('/:id',editUser)
export default router ;