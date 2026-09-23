import express from 'express'
import { getCurrentUser } from '../controllers/getHeroesController.js'

export const getUserNameRouter = express.Router()

getUserNameRouter.get('/', getCurrentUser)