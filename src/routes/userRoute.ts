import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { protectUser} from "../middleware/authMiddleware";

const router: Router = express.Router();

router.post("/register", registerUser); // CREATE 
router.post("/login", loginUser);   // CREATE 
router.get("/me", protectUser, getUser); // READ 
router.put("/update/:userId", updateUser); // UPDATE
router.delete("/delete/:userId", deleteUser ) // DELETE

export default router;

