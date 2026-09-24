import express from "express";
import { registerUser, loginUser,logOut} from '../controllers/authController.js'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', loginUser)
authRouter.post('/logout', logOut)



