import express from 'express'
import { getCurrentUser } from '../controllers/meController.js'

export const getUserNameRouter = express.Router()

getUserNameRouter.get('/me', getCurrentUser)